var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , prettyjson = require('prettyjson')
  , log = require('../config').log

describe('doc.cloudstack', function () {

  this.timeout(1500000);

  var resourceId = '8b8d9e5d-3850-4768-ac24-83666d1916a7';

  var ipAddress = '10.41.14.23';

  it('doc.cs.listApi', function (done) {
    var data = {
    };
    c3Sdk.listApiDocs(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });


})

