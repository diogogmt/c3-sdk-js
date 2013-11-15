var request = require('request')
  , crypto = require('crypto')
  , commands = require('./commands').all
  , _ = require('underscore')
  , util = require('util')
  , async = require('async')
  , prettyjson = require('prettyjson')
  , utils = require('./utils')




module.exports = function (options) {
  return new Openstack(options);
}

var users = {};
var services = {}

function Openstack(options) {
  options = options || {};
  var self = this;
  this.endPoints =  options.endPoints;
  this.username = options.username;
  this.password = options.password;
  this.tenantId = options.tenantId;
  this.tenantName = options.tenantName;

  commands.forEach(function (cmd) {
    self[cmd.name] = function (opts, cb) {
      opts = opts || {};
      var uriParams = opts.uriParams || {};
      var params = opts.params || {};
      self.exec(cmd, uriParams, params, cb);
    }
  });
};


Openstack.prototype.getAuthToken = function (cb) {
  var self = this;
  var token = users[self.username] && users[self.username].tokenMD5Id;
  if(token) return cb(null, token);

  var cmd = { name: 'authenticate', uri: '​/tokens', uriParams: [], service: 'identity', type:'publicURL', method: 'POST' };
  var endPoint = self.endPoints[cmd.service][cmd.type];
  var credentials = {
    auth: {
      passwordCredentials: {
        username: self.username,
        password: self.password
      }
    }
  }
  if (self.tenantName) credentials.auth.tenantName = self.tenantName;
  if (self.tenantId) credentials.auth.tenantId = self.tenantId;
  var url = utils.urljoin(endPoint, cmd.uri);
  var requestOptions = {
    url: url,
    body: credentials,
    json: true,
  }

  request[cmd.method.toLowerCase()](requestOptions, function (err, response, body) {
    if (err) return cb(err);
    body = body || {}
    var access = body.access;
    var token = access.token;
    if (!token) throw new Error('Error authenticating user ' +  self.username + ' to tenant ' + self.tenantName);
    var tokenId = token.id;
    if (utils.is_ans1_token(token.id)) {
      // Rewrite the token id as the MD5 hash since we can use that in place
      // of the full PKI-signed token (which is enormous).
      tokenId = token.md5Id = crypto.createHash('md5').update(token.id).digest("hex");
    }
    users[self.username] = {
      access: access
    }
    cb(null, tokenId);
  })
}

Openstack.prototype.exec = function(cmd, uriParams, params, cb) {
    var self = this;
    async.waterfall([

      function authToken (callback) {
        self.getAuthToken(callback);
      },

      function runCommand (token, callback) {
        console.log('runCommand');
        // console.log('users[', self.username, ']: ', prettyjson.render(users[self.username]));
        if (_.size(uriParams) != cmd.uriParams.length) {
          return cb('Command ' + cmd.name + " - requires the following URI parameters: " + cmd.uriParams);
        }
        var uri = utils.parseUri(cmd.uri, cmd.uriParams, uriParams);
        var serviceEndpoint = self.endPoints[cmd.service][cmd.type]
        var requestOptions = {
          url: utils.urljoin(serviceEndpoint, uri),
          json: true,
          headers: {
            'X-Auth-Project-Id': self.tenantId,
            'X-Auth-Token': token
          }
        }
        if (_.size(params)) requestOptions.body = params;
        console.log('requestOptions: ', prettyjson.render(requestOptions));
        request[cmd.method.toLowerCase()](requestOptions, callback);
      },

    ],  function finish (err, res, data) {
          if (err) return cb(err);
          var statusCode = res && res.statusCode;
          console.log('statusCode: ', statusCode);
          console.log('err: ', JSON.stringify(err, null, 2));
          if (statusCode != 200 && statusCode != 201 && statusCode != 202 && statusCode != 203) {
            err = data;
          }
          console.log('data: ', JSON.stringify(data, null, 2));
          console.log('err: ', JSON.stringify(err, null, 2));
          data = data && cmd.resKey ? data[cmd.resKey] : data;
          cb(err, data);
    });

  };