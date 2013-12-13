var assert = require('assert')
  , c3Sdk = require('./config').c3Sdk

describe('vpc.cloudstack', function () {

  this.timeout(1500000);

  var id = '1366e504-d234-41dd-b4a8-eb560fe001d5';
  var offeringId = '3cea710f-0eee-4277-bb97-9ff4daa96a75';
  var name = 'VpcTest';

  it('vpc.aws.create', function (done) {
    var cmd = 'vpcCreate';
    var data = {
      siteId: 2,
        name: name + Math.floor((Math.random()*1000))+1,
        cidr: '10.150.0.0/22',
        offeringId: offeringId
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('vpc.aws.update', function (done) {
    var cmd = 'vpcUpdate';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('vpc.aws.destroy', function (done) {
    var cmd = 'vpcDestroy';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('vpc.aws.details', function (done) {
    var cmd = 'vpcDetails';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('vpc.aws.list', function (done) {
    var cmd = 'vpcList';
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

