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