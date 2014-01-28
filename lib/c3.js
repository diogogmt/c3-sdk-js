var request = require('request')
  , crypto = require('crypto')
  , commands = require('./commands').all
  , _ = require('underscore')
  , util = require('util')
  , async = require('async')
  , prettyjson = require('prettyjson')
  , utils = require('./utils')
  , C3v1 = require('./v1/c3.js')


var httpMethodMap = {
  'post': 'post',
  'put': 'put',
  'delete': 'del',
  'del': 'del',
  'get': 'get',
}


module.exports = function (options) {
  if (options.version == 1) {
    return new C3v1(options);
  }
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
  this.debug = options.debug;

  if (this.tokenId) {
    users[this.username] = {
      access: {
        tokenId: this.tokenId
      }
    }
  }

  commands.forEach(function (cmd) {
    self[cmd.name] = function (params, cb) {
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
  if (self.debug) console.log('requestOptions:\n', prettyjson.render(requestOptions));
  request[cmd.method.toLowerCase()](requestOptions, function (err, response, body) {
    if (self.debug)   console.log('body: ', prettyjson.render(body));
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
        var uri = utils.parseUri(cmd.uri, cmd.uriParams, params);
        _.each(cmd.uriParams, function (param) {
          if (_.has(params, param)) {
            delete params[param];
          }
        });

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
        if (self.debug) console.log('requestOptions:\n', prettyjson.render(requestOptions));
        request[httpMethodMap[cmd.method.toLowerCase()]](requestOptions, callback);
      },

    ],  function finish (err, res, data) {
          if (err) return cb(err);
          var statusCode = res && res.statusCode;
          if (self.debug) {
            console.log('statusCode: ', statusCode);
            console.log('body: ', prettyjson.render(data));
            console.log('err: ', JSON.stringify(err, null, 2));
          }
          if (statusCode != 200 && statusCode != 201 && statusCode != 202 && statusCode != 203) {
            err = data;
          } 
          // console.log('data: ', JSON.stringify(data, null, 2));
          // console.log('err: ', JSON.stringify(err, null, 2));
          err = !err ? data.err : err;
          data = data && cmd.resKey ? data[cmd.resKey] : data;
          cb(err, data);
    });

  };