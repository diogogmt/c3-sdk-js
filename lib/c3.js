var request = require('request')
  , crypto = require('crypto')
  , commands = require('./commands').all
  , _ = require('underscore')
  , util = require('util')
  , async = require('async')
  , prettyjson = require('prettyjson')
  , utils = require('./utils')


var httpMethodMap = {
  'post': 'post',
  'put': 'put',
  'delete': 'del',
  'del': 'del',
  'get': 'get',
}



module.exports = function (options) {
  return new C3(options);
}

var users = {};
var services = {}

function C3(options) {
  options = options || {};
  var self = this;
  this.endPoint =  options.endPoint;
  this.username = options.username;
  this.password = options.password;
  this.impersonatedUserId = options.impersonatedUserId;
  this.tokenId = options.tokenId;

  if (this.tokenId) {
    users[this.username] = {
      access: {
        tokenId: this.tokenId
      }
    }
  }

  commands.forEach(function (cmd) {
    self[cmd.name] = function (params, cb) {
      // console.log('executing ', cmd.name);
      // console.log('params ', params);
      params = params || {}
      self.exec(cmd, params, cb);
    }
  });
};


C3.prototype.getAuthToken = function (cb) {
  var self = this;
  var token = users[self.username] && users[self.username].access && users[self.username].access.tokenId;
  if(token) return cb(null, token);

  var cmd = { name: 'authenticate', uri: '​/tokens', uriParams: [], service: '', type:'', method: 'POST' };
  var endPoint = self.endPoint;
  var credentials = {
    username: self.username,
    password: self.password
  }
  var url = utils.urljoin(endPoint, cmd.uri);
  var requestOptions = {
    url: url,
    body: credentials,
    json: true,
  }

  request[cmd.method.toLowerCase()](requestOptions, function (err, response, body) {
    // console.log('body: ', prettyjson.render(body));
    // console.log('body: ', JSON.stringify(body, null, 2));
    if (err) return cb(err);
    body = body || {}
    var access = body.token;
    var tokenId = access.tokenId;
    if (!tokenId) throw new Error('Error authenticating user ' +  self.username);
    users[self.username] = {
      access: access
    }
    cb(null, tokenId);
  })
}

C3.prototype.exec = function(cmd, params, cb) {
    var self = this;
    async.waterfall([

      function authToken (callback) {
        self.getAuthToken(callback);
      },

      function runCommand (token, callback) {
        // console.log('runCommand');
        // console.log('users[', self.username, ']: ', prettyjson.render(users[self.username]));
        // if (_.size(uriParams) != cmd.uriParams.length) {
        //   return cb('Command ' + cmd.name + " - requires the following URI parameters: " + cmd.uriParams);
        // }
        // console.log('uri: ', prettyjson.render(uri));
        // console.log('params: ', prettyjson.render(params));
        // console.log('cmd: \n', prettyjson.render(cmd));

        // var uri = utils.parseUri(cmd.uri, cmd.uriParams, uriParams);
        var uri = utils.parseUri(cmd.uri, cmd.uriParams, params);
        _.each(cmd.uriParams, function (param) {
          // console.log('param: ', prettyjson.render(param));
          if (_.has(params, param)) {
            // console.log('removing param');
            // console.log('params[', param, ']:', params[param]);
            delete params[param];
            // console.log('params[', param, ']:', params[param]);
          }
        });
        // console.log('params', params);

        var serviceEndpoint = self.endPoint;
        var url = utils.urljoin(serviceEndpoint, uri);
        if (cmd.method.toLowerCase() == 'get') url += '?' + utils.parseGetParams(params);

        var requestOptions = {
          url: url,
          json: true,
          headers: {
            'X-Auth-Token': token
          },
          body: {}
        }
        if (self.impersonatedUserId) requestOptions.headers['X-Impersonate-User'] = self.impersonatedUserId;
        if (_.size(params)) requestOptions.body = params;
        console.log('requestOptions:\n', prettyjson.render(requestOptions));
        request[httpMethodMap[cmd.method.toLowerCase()]](requestOptions, callback);
      },

    ],  function finish (err, res, data) {
          if (err) return cb(err);
          var statusCode = res && res.statusCode;
          // console.log('statusCode: ', statusCode);
          // console.log('err: ', JSON.stringify(err, null, 2));
          // console.log('data: ', JSON.stringify(data, null, 2));
          if (statusCode != 200 && statusCode != 201 && statusCode != 202 && statusCode != 203) {
            err = data;
          }
          // console.log('data: ', JSON.stringify(data, null, 2));
          // console.log('err: ', JSON.stringify(err, null, 2));
          data = data && cmd.resKey ? data[cmd.resKey] : data;
          cb(err, data);
    });

  };