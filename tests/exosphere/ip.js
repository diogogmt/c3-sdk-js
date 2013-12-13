var assert = require('assert')
  , c3Sdk = require('./config').c3Sdk
  , prettyjson = require('prettyjson')

describe('ip', function () {

  this.timeout(1500000);

  var id = '1b786e9c-40eb-11e3-b250-10ba78286170';
  var siteId = 2;
  var units = 3;

  

  it('ip.acquire', function (done) {
    var cmd = 'ipAcquire';
    var data = {
      siteId: siteId,
      units: units
    }
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('ip.release', function (done) {
    var cmd = 'ipRelease';
    var data = {
      id: id,
    }
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('ip.list', function (done) {
    var cmd = 'ipList';
    var data = {
    }
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

})

