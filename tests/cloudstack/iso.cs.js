var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk

describe('iso.cloudstack', function () {

  this.timeout(1500000);

  var id = 'b2c286f9-9dfc-41a9-8394-1f104e1798c8';
  var serverId = '569dd1cb-35e1-4c8f-bb9c-fb997a722b73';

  it('iso.cs.attach', function (done) {
    var cmd = 'isoAttach';
    var data = {
      id: id,
      serverId: serverId
    };
    c3Sdk.attachIso(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('iso.cs.detach', function (done) {
    var cmd = 'isoDetach';
    var data = {
      id: id,
      serverId: serverId
    };
    c3Sdk.detachIso(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('iso.cs.list', function (done) {
    var cmd = 'isoList';
    var data = {
      siteIds: '2',
      type: 'featured'
    };
    c3Sdk.listIsos(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });


})

