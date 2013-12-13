var assert = require('assert')
  , c3Sdk = require('./config').c3Sdk
  , prettyjson = require('prettyjson')

describe('server.cloudstack', function () {

  this.timeout(1500000);

  it('resource.cs.list', function (done) {
    var cmd = 'resourceList';
    var data = {
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

})

