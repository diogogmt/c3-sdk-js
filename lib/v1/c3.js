var request = require('request')
  , crypto = require('crypto')
  , util = require('util')
  , _ = require('underscore')


module.exports = function (options) {
  // console.log('options: ', options)
  if (!options) {
    options = {};
  }
  
  var self = this;
  var url = options.url
    , port = options.port
    , path = options.path
    , apiKey = options.apiKey
    , apiSecret = options.apiSecret

  var endPoint = url + ':' + port + path;

  this.exec = function(cmd, data, callback) {
    // console.log('\n\n\nExecuting: ', cmd);
    var paramString = genSignedParamString(
      apiKey, 
      apiSecret, 
      cmd,
      data
    );
    
    var uri = endPoint + '?' + paramString;
    // console.log('uri: ', uri);
    request(uri, function(err, res, body) {
      // console.log(cmd.name, 'err: ', err);
      if (err) return callback(err);
      // console.log('statusCode: ', res.statusCode);
      // var body = JSON.parse(body);
      // console.log(util.inspect(body, { showHidden: true, depth: null }));
      callback(null, body);
    });

  };


  var genSignedParamString = function(apiKey, apiSecret, cmd, params) {
    // console.log('apiKey: ', apiKey, '\n\n');
    // console.log('apiSecret: ', apiSecret, '\n\n');
    // console.log('cmd: ', cmd, '\n\n');
    // console.log('params: ', params, '\n\n');

    params.apiKey = apiKey;
    params.command = cmd;   
    params.response = 'json';

    var params = buildRequest(params);
    // console.log('params: ', params, '\n\n');
    var paramKeys = [];
    for(var key in params) {
      if(params.hasOwnProperty(key)){
        paramKeys.push(key);
      };
    };
    // console.log('paramKeys: ', paramKeys, '\n\n');    
    paramKeys.sort();
    // console.log('paramKeys sorted: ', paramKeys, '\n\n');    

    var qsParameters = [];
    for(var i = 0; i < paramKeys.length; i++) {
      key = paramKeys[i];
      qsParameters.push(key + '=' + encodeURIComponent(params[key]));
    }
    // console.log('qsParameters: ', qsParameters, '\n\n');    
    

    var queryString = qsParameters.join('&')
    // console.log('queryString: ', queryString, '\n\n');    
    var cryptoAlg = crypto.createHmac('sha1', apiSecret)
    var signature = cryptoAlg.update(queryString.toLowerCase()).digest('base64');
    // console.log('signature: ', signature, '\n\n');    

    return queryString + '&signature=' + encodeURIComponent(signature);
  };
};


var util = {
  each: function each(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var ret = iterFunction.call(this, key, object[key]);
      }
    }
  },
};

function QueryParamSerializer() {
}

QueryParamSerializer.prototype.serialize = function serialize(params, fn) {
  this.serializeStructure('', params, fn);
}

QueryParamSerializer.prototype.serializeStructure = function serializeStructure(prefix, struct, fn) {
  var that = this;
  util.each(struct, function (name, member) {
    name = prefix ? prefix + '.' + name : name;
    that.serializeMember(name, member, fn);
  });
}

QueryParamSerializer.prototype.serializeList = function serializeList(name, list, fn) {
  var that = this;
  _.each(list, function (v, n) { 
    var suffix = '.' + (n + 1);
    that.serializeMember(name + suffix, v, fn);
  });
}

QueryParamSerializer.prototype.serializeMember = function serializeMember(name, value, fn) {
  if (_.isArray(value)) {
    this.serializeList(name, value, fn);
  } else if (_.isObject(value)) {
    this.serializeStructure(name, value, fn);
  }  else {
    fn.call(this, name, String(value));
  }
}

var buildRequest = function buildRequest(params) {
  var httpRequest = {
    params: {}
  }
  var builder = new QueryParamSerializer();
  builder.serialize(params, function(name, value) {
    httpRequest.params[name] = value;
  });
  // console.log('httpRequest.params: ', httpRequest.params);
  return httpRequest.params;
}





  


