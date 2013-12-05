var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log

describe('token', function () {

  this.timeout(1500000);

  var id = '52f8ba21-14aa-41cb-affd-00d3c4f13c71';
  var offeringId = '9a623542-a73f-4708-9e73-8e8f8d78fd06';
  var name = 'tokenTestACLTESTNEW';

  it('token.create', function (done) {
    var data = {
      username: 'testdev',
      password: 'password'
    };
    c3Sdk.authenticate(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('token.list', function (done) {
    var data = {
      userId: 2
    };
    c3Sdk.listTokens(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

})

