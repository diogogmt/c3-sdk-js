var C3Sdk = require('../lib/c3')
var request = require('request')


var url = 'http://localhost';
var port = 8000;
var path = '/api/v2/cdos'
var endPoint = url + ':' + port + path;

var username = 'testdev';
var password = 'password';
var userId = 2
var tokenId = 'VTzkJSGGeupTm2Eu3SQ6jjzv8RQg5f3dRLs69HGaFYUtaU_TIL46yfEVBTwRgeaC2j03OM4gLJMY3Xv8mUNuXA';

console.log('endPoint: ' + endPoint);
var c3Sdkv2 = new C3Sdk({
  endPoint: endPoint,
  username: username,
  password: password,
  userId: userId,
  // tokenId: tokenId
});

var log = exports.log = {
  json: function (json) {
    json = json || {};
    json = typeof body === "string"
          ? JSON.parse(json)
          : json;
    console.log(JSON.stringify(json, null, '\t'));
    // console.log(JSON.stringify(JSON.parse(json), null, '\t'));
  }
}

exports.c3Sdk = c3Sdkv2;

