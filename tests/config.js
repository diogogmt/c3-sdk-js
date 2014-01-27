var C3Sdk = require('../lib/c3');
var request = require('request');


// var url = 'http://cdos.dev.cloud'; // host/ip for c3 server
// var port = 80; 
var url = 'http://127.0.0.1'; // host/ip for c3 server
var port = 8000; 
var path = '/api/v2/cdos' // API resource path
var endPoint = url + ':' + port + path;

var username = 'testdev';
var password = 'password';
// var username = 'kam';
// var password = 'Xyz123!!';
var userId = 11 // User to impersonate, defaults to authenticated user
// Use existing tokenID
var tokenId = 'VTzkJSGGeupTm2Eu3SQ6jjzv8RQg5f3dRLs69HGaFYUtaU_TIL46yfEVBTwRgeaC2j03OM4gLJMY3Xv8mUNuXA';

var c3Sdkv2 = new C3Sdk({
  endPoint: endPoint,
  username: username,
  password: password,
  // userId: userId, // optinal
  // tokenId: tokenId // optional
});

var log = exports.log = {
  json: function (json) {
    json = json || {};
    json = typeof body === "string"
          ? JSON.parse(json)
          : json;
    console.log(JSON.stringify(json, null, '\t'));
  }
}

exports.c3Sdk = c3Sdkv2;

