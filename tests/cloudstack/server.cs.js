var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , prettyjson = require('prettyjson')
  , log = require('../config').log

describe('server.cloudstack', function () {

  this.timeout(1500000);

  var id = '569dd1cb-35e1-4c8f-bb9c-fb997a722b73';
  var name = 'ServerTestAPIV2';

  var templateId = '1bb179b4-35d1-11e3-a6fd-3a96760eadba'; // cento
  // var templateId = '2be8ee7b-edaf-455c-a2f2-cbf41d9d055b'; // windows
  // var templateId = 'acb2d989-34bc-4d0c-a17a-558f011873e4'; // ISO

  var securityZoneId = '2552496e-edf8-4f71-adb6-4f573418de7e';

  var smallOffering = '61f85f50-aedd-425f-a66b-575e33c073eb';
  var mediumOffering = '15d07ddb-eb0f-42fe-840a-4475d73cc0f0';
  var xlargeOffering = '91a625ab-0dc8-449c-bfa3-b3ca0e85b501';
  var moreCpuOffering = '3943a905-579e-436d-b82c-46c097459e63';
  var moreMemoryOffering = '49e43700-7b31-4f67-88ea-ce99c0b0a991';

  var diskOfferingId = '1aaa56f3-f9a7-4bb3-a982-d827984c79fd';

  var templateTypeIso = 'ISO';
  var templateTypeFeatured = 'featured'

  it('server.cs.create', function (done) {
    var cmd = 'serverCreate';
    var data = {
      siteId: 2,
      name: name + Math.floor((Math.random()*10000))+1,
      state: false,
      offeringId: smallOffering,
      templateId: templateId,
      templateType: templateTypeFeatured,
      securityZoneId: securityZoneId,
      // diskOfferingId: diskOfferingId,
    }
    c3Sdk.createServer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.update', function (done) {
    var cmd = 'serverUpdate';
    var data = {
      id: id,
    };
    c3Sdk.updateServer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.changeOffering', function (done) {
    var cmd = 'serverChangeOffering';
    var data = {
      id: id,
      offeringId: mediumOffering
    };
    c3Sdk.changeServerOffering(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.destroy', function (done) {
    var cmd = 'serverDestroy';
    var data = {
      id: id,
    };
    c3Sdk.destroyServer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.start', function (done) {
    var cmd = 'serverStart';
    var data = {
      id: id,
    };
    c3Sdk.startServer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.stop', function (done) {
    var cmd = 'serverStop';
    var data = {
      id: id,
    };
    c3Sdk.stopServer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.reboot', function (done) {
    var cmd = 'serverReboot';
    var data = {
      id: id,
    };
    c3Sdk.rebootServer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.recover', function (done) {
    var cmd = 'serverRecover';
    var data = {
      id: id,
    };
    c3Sdk.recoverServer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.enableSnat', function (done) {
    var cmd = 'serverEnableSnat';
    var data = {
      id: id
    };
    c3Sdk.serverEnableSnat(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.disableSnat', function (done) {
    var cmd = 'serverDisableSnat';
    var data = {
      id: id,
    };
    c3Sdk.serverDisableSnat(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.calculateCru', function (done) {
    var cmd = 'serverCalculateCru';
    var data = {
      siteId: 2,
      offeringId: smallOffering,
      templateId: templateId,
      templateType: templateTypeIso,
      diskSize: 20
      // diskOfferingId: diskOfferingId
    }
    c3Sdk.serverCalculateCru(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.details', function (done) {
    var cmd = 'serverDetails';
    var data = {
      id: id,
    };
    c3Sdk.serverDetails(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('server.cs.list', function (done) {
    var cmd = 'serverList';
    var data = {
      siteIds: '2',
    };
    c3Sdk.listServers(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

})

