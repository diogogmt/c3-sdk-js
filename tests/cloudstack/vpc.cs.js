var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log

describe('vpc.cloudstack', function () {

  this.timeout(1500000);

  var id = 'f59a839d-1107-4fa3-a523-c386ff8ba895';
  var name = 'APIV2VpcTest';
  var renamed = 'APIV2VpcTestRenamed';

  it('vpc.cs.create', function (done) {
    var data = {
      siteId: 2,
      name: name + Math.floor((Math.random()*1000))+1,
      cidr: '10.100.0.0/22',
    };
    c3Sdk.createVpc(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpc.cs.update', function (done) {
    var cmd = 'vpcUpdate';
    var data = {
      id: id,
      name: renamed + Math.floor((Math.random()*1000))+1,
    };
    c3Sdk.updateVpc(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpc.cs.destroy', function (done) {
    var cmd = 'vpcDestroy';
    var data = {
      id: id,
    };
    c3Sdk.destroyVpc(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpc.cs.details', function (done) {
    var cmd = 'vpcDetails';
    var data = {
      id: id,
    };
    c3Sdk.vpcDetails(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpc.cs.list', function (done) {
    var cmd = 'vpcList';
    var data = {
      siteIds: '2',
    };
    c3Sdk.listVpcs(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });


})

