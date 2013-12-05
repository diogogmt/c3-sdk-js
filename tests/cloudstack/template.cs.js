var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log

describe('template.cloudstack', function () {

  this.timeout(1500000);

  // var id = '1bb179b4-35d1-11e3-a6fd-3a96760eadba'; // cento no gui
  var id = '09b1772f-f840-4373-a4f9-bb7a6411beda'; // custom

  var serverId = '569dd1cb-35e1-4c8f-bb9c-fb997a722b73';
  var volumeId = 'bc0f52a5-6765-4d1f-9cc1-ae91df943c5d';
  var snapshotId = 'a020ae98-d499-4703-819f-4cc0fc09114e';

  var name = "V2TemplateTest"
  var osTypeId = '1c86ff8a-35d1-11e3-a6fd-3a96760eadba';

  it('template.cs.createFromServer', function (done) {
    var cmd = 'templateCreate';
    var data = {
      siteId: 2,
      name: name + Math.floor((Math.random()*1000))+1,
      serverId: serverId,
      volumeId: volumeId,
    };
    c3Sdk.createTemplate(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('template.cs.createFromSnapshot', function (done) {
    var cmd = 'templateCreate';
    var data = {
      siteId: 2,
      snapshotId: snapshotId,
      name: name + Math.floor((Math.random()*10000))+1,
      osTypeId: osTypeId,
      // passwordEnabled: false,
      publicAccess: true,
      featured: true,
    };
    c3Sdk.createTemplate(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('template.cs.update', function (done) {
    var cmd = 'templateUpdate';
    var data = {
      id: id,
      name: name + Math.floor((Math.random()*1000))+1,
      featured: true,
      publicAccess: true
    };
    c3Sdk.updateTemplate(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('template.cs.destroy', function (done) {
    var cmd = 'templateDestroy';
    var data = {
      id: id,
    };
    c3Sdk.destroyTemplate(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('template.cs.details', function (done) {
    var cmd = 'templateDetails';
    var data = {
      siteId: 2,
      id: id,
      type: 'featured',
    };
    c3Sdk.templateDetails(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('template.cs.list', function (done) {
    var cmd = 'templateList';
    var data = {
      siteIds: '2',
      type: 'featured'
    };
    c3Sdk.listTemplates(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('template.cs.calculateCru', function (done) {
    var cmd = 'templateCalculateCru';
    var data = {
      // id: id,
      siteId: 2,
      // type: 'featured',
      size: 20,
      // snapshotId: snapshotId,
      // volumeId: volumeId,
    };
    c3Sdk.calculateTemplateCru(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });


})

