var assert = require('assert')
  , c3Sdk = require('./config').c3Sdk

describe('securityZone.aws', function () {

  this.timeout(1500000);

  var id = 'baa7581c-4a09-47bb-a085-3452c5ff73b3';
  var vpcId = 'vpc-c73216a6';
  var cidr = '10.201.0.0/24'
  var name = 'SecurtyZone';
  var desc = 'SZDesc';

  it('securityZone.aws.create', function (done) {
    var cmd = 'securityZoneCreate';
    var data = {
        siteId: 4,
        name: name + Math.floor((Math.random()*1000))+1,
        desc: desc + Math.floor((Math.random()*1000))+1,
        cidr: cidr,
        vpcId: vpcId,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('securityZone.aws.update', function (done) {
    var cmd = 'securityZoneUpdate';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('securityZone.aws.destroy', function (done) {
    var cmd = 'securityZoneDestroy';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('securityZone.aws.details', function (done) {
    var cmd = 'securityZoneDetails';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('securityZone.aws.list', function (done) {
    var cmd = 'securityZoneList';
    var data = {
      siteIds: '4',
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });


})

