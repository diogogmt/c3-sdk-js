var assert = require('assert')
  , c3Sdk = require('./config').c3Sdk
  , prettyjson = require('prettyjson')

describe('server.os', function () {

  this.timeout(1500000);

  var id = '42d6312a-47df-410a-9990-80747fd31a04';
  var templateId = '2a181867-b8f7-4c02-a289-03a3e3328ab9';
  var offeringId = 'f2d8904b-bed2-4939-900b-e0ee850dc36f';
  var securityZoneId = '2b0ee5ef-8735-4abb-be0a-bf6d3aaefdc9';
  var name = 'ServerTest';
  var vpcId = '77a71c93-3f3c-446a-9e93-70438f5cf340';

  it('server.os.create', function (done) {
    var cmd = 'serverCreate';
    var data = {
      siteId: 2,
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

  it('server.os.update', function (done) {
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

  it('server.os.changeOffering', function (done) {
    var cmd = 'serverChangeOffering';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.os.destroy', function (done) {
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

  it('server.os.start', function (done) {
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

  it('server.os.stop', function (done) {
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

  it('server.os.reboot', function (done) {
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

  it('server.os.enableSnat', function (done) {
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

  it('server.os.disableSnat', function (done) {
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

  it('server.os.calculateCru', function (done) {
    var cmd = 'serverCalculateCru';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('server.os.details', function (done) {
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

  it('server.os.list', function (done) {
    var cmd = 'serverList';
    var data = {
      // siteIds: '1,2',
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

})

