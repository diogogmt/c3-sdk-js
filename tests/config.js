var C3Sdk = require('../lib/c3');
var request = require('request');


var profiles = {
  local: {
    endPoint: 'http://127.0.0.1:8000/api/v2/cdos',
    username: 'testdev',
    password: 'password',  
    debug: true
  },
  dev: {
    endPoint: 'http://cdos.dev.cloud/api/v2/cdos',
    username: 'kam',
    password: 'Xyz123!!',  
    debug: true
  },

}
var userId = 11 // User to impersonate, defaults to authenticated user
// Use existing tokenID
var tokenId = 'VTzkJSGGeupTm2Eu3SQ6jjzv8RQg5f3dRLs69HGaFYUtaU_TIL46yfEVBTwRgeaC2j03OM4gLJMY3Xv8mUNuXA';

// userId: userId, // optinal
// tokenId: tokenId // optional
var c3Sdkv2 = new C3Sdk(profiles['dev']);

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

