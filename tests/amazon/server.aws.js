var assert = require('assert')
  , c3Sdk = require('./config').c3Sdk
  , prettyjson = require('prettyjson')

describe('server.aws', function () {

  this.timeout(1500000);

  var id = 'i-d7e164af';
  var templateId = 'ami-51792c38';
  var offeringId = 'e3a9ed00-316c-421e-ae02-dfa5b19d42fe';
  var securityZoneId = 'sg-91fd82fa';
  var name = 'ServerTest';
  var vpcId = '77a71c93-3f3c-446a-9e93-70438f5cf340';

  var smallOffering = 'e3a9ed00-316c-421e-ae02-dfa5b19d42fe';
  var mediumOffering = '16ebc6ed-e008-46b7-9988-a33272a47e23'
  var largeOffering = '8287cd21-585f-4141-b891-6f012e96a966';

  it('server.aws.create', function (done) {
    var cmd = 'serverCreate';
    var data = {
      siteId: 3,
      name: name + Math.floor((Math.random()*10000))+1,
      state: false,
      offeringId: offeringId,
      templateId: templateId,
      templateType: 'featured',
      securityZoneId: securityZoneId,
      hypervisor: 'XenServer'
    }
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.update', function (done) {
    var cmd = 'serverUpdate';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.changeOffering', function (done) {
    var cmd = 'serverChangeOffering';
    var data = {
      id: id,
      offeringId: smallOffering
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.destroy', function (done) {
    var cmd = 'serverDestroy';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.start', function (done) {
    var cmd = 'serverStart';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.stop', function (done) {
    var cmd = 'serverStop';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.reboot', function (done) {
    var cmd = 'serverReboot';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.enableSnat', function (done) {
    var cmd = 'serverEnableSnat';
    var data = {
      id: id,
      vpcId: vpcId
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.disableSnat', function (done) {
    var cmd = 'serverDisableSnat';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.calculateCru', function (done) {
    var cmd = 'serverCalculateCru';
    var data = {
      siteId: 3,
      name: name + Math.floor((Math.random()*10000))+1,
      state: false,
      offeringId: offeringId,
      templateId: templateId,
      templateType: 'featured',
      securityZoneId: securityZoneId,
      hypervisor: 'XenServer'
    }
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.details', function (done) {
    var cmd = 'serverDetails';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.aws.list', function (done) {
    var cmd = 'serverList';
    var data = {
      siteIds: '3,4',
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

})

