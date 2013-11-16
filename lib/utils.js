var _ = require('underscore')

exports.urljoin = function () {
  // Constructs URLs with proper slashes regardless of leading/trailing
  // slashes on the arguments passed in.
  var url = "";

  for (var i = 0, j = arguments.length; i < j; i++) {
    var arg = arguments[i];

    if (typeof(arg) === "undefined") {
      continue;
    }

    arg = arg.toString().trim();
    // Strip any preceding slashes since we append slashes to everything.
    if (arg.substr(0, 1) === "/") {
      arg = arg.substr(1);
    }
    // Add a trailing slash unless this is the end of URL.
    if (arg.substr(-1) !== "/" && i !== arguments.length - 1) {
      arg += "/";
    }
    // Join the current piece to our URL string.
    url += arg;
  }
  return url;
}

exports.parseUri = function (uri, keys, values) {
  // console.log('uri: ', uri);
  // console.log('keys: ', keys);
  // console.log('values: ', values);
  if (keys.length) {
    // Convert all keys to lower case
    _.keys(values).forEach(function (key) {
      values[key.toLowerCase()] = values[key];
    });
    console.log('values: ', values);
    keys.forEach(function (key) {
      uri = uri.replace(':' + key, values[key]);
    });
  }
  return uri;
}

exports.is_ans1_token = function (token) {
  // Credit goes to Adam Young for figuring this out. See Keystone's
  // source code for the logic/math that proves it.
  return token.indexOf("MII") === 0 ? true : false;
}


exports.parseGetParams = function(params) {
  console.log('params: ', params, '\n\n');

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
  console.log('queryString: ', queryString, '\n\n');    
  return queryString;
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