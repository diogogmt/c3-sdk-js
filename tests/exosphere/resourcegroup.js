var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , prettyjson = require('prettyjson')
  , log = require('../config').log

describe('resourceGroup', function () {

  this.timeout(1500000);

  var id = 11;
  var siteid = 1;

  var computeOfferingId = "f49b8b5a-5e91-11e3-8a8b-5dc9d7d8b812";  // small instance
  var templateOfferingId = "f49b6080-5e91-11e3-8a8b-5dc9d7d8b812"; // template CentOS 6.1  
  var securityOfferingId = "6a748896-6d0f-4e17-ac63-0cd9877257ef"; // patel security zone

  var name = 'TestGroup';
  var newname = 'Kam newd Group';


  it('resourcegroup.creategroup', function (done) {
    var data = {
      siteId: siteid,
      computeResourceId: computeOfferingId,
      templateResourceId: templateOfferingId,
      securityResourceId: securityOfferingId,
      name: name + Math.floor((Math.random()*1000))+1,
    }
    c3Sdk.createGroup(data, function (err, result) {
    console.log('err: ', err);
    log.json(result);
    done();
     });
  });

  it('resourcegroup.updategroup', function (done) {
    var data = {
      id: id,
      computeResourceId: computeOfferingId,
      templateResourceId: templateOfferingId,
      securityResourceId: securityOfferingId,
      name: newname,
    };
   c3Sdk.updateGroup(data, function (err, result) {
   console.log('err: ', err);
   log.json(result);
   done();
   });
  });


  it('resourcegroup.deletegroup', function (done) {
    var data = {
      id: id,
    };
   c3Sdk.deleteGroup(data, function (err, result) {
   console.log('err: ', err);
   log.json(result);
   done();
   });
  });
 
   it('resourcegroup.details', function (done) {
    var data = {
      id: id,
    };
   c3Sdk.detailsGroup(data, function (err, result) {
   console.log('err: ', err);
   log.json(result);
   done();
   });
  });

   it('resourcegroup.listGroups', function (done) {
    var data = {
    };
    c3Sdk.listGroups(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });


  it('resourcegroup.createserver', function (done) {
    var data = {
      id: id,
    };
   c3Sdk.createServer(data, function (err, result) {
   console.log('err: ', err);
   log.json(result);
   done();
   });
  });


  it('resourcegroup.deleteserver', function (done) {
    var data = {
      id: id,
    };
   c3Sdk.deleteServer(data, function (err, result) {
   console.log('err: ', err);
   log.json(result);
   done();
   });
  });

  it('resourcegroup.start', function (done) {
    var data = {
      id: id,
    };
    c3Sdk.startServerGroup(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  }); 

  it('resourcegroup.stop', function (done) {
    var data = {
      id: id,
    };
    c3Sdk.stopServerGroup(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });  


})