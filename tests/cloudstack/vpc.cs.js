var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log

describe('vpc.cloudstack', function () {

  this.timeout(1500000);

  var id = '6181deac-668f-401b-b208-646bcc828baf';
  var name = 'APIV2VpcTest';
  var renamed = 'APIV2VpcTestRenamed';

  var cidr = '10.15.9.0';
  var cidrPrefix = '23';

  it('vpc.cs.create', function (done) {
    var data = {
      siteId: 2,
      name: name + Math.floor((Math.random()*1000))+1,
      cidr: cidr,
      cidrPrefix: cidrPrefix,
    };
    c3Sdk.createVpc(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpc.cs.update', function (done) {
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

