var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , prettyjson = require('prettyjson')
  , log = require('../config').log

describe('resourceGroup', function () {

  this.timeout(1500000);

  var id = 8;
  var siteid = 1;

  var compute = {
    local: '8b28069c-8837-11e3-a056-b6836e9fd345',
    dev: '6f0bc672-883e-11e3-9605-be159b62ffc0'
  }
  
  var template = {
    local: 'eca1bda8-84a1-11e3-9077-7d8d4fe07abf',
    dev: 'eb0902d5-e1dd-4540-9468-230a0c44c589'
  }
  
  var securityZone = {
    local: '10816edb-8fdb-4951-900c-5ddc57a4ead9',
    dev: 'a91e23fe-da74-4a35-8fe3-93bfaaef95f0'
  }
  var templateOfferingId = ""; // bidderbase
  var securityOfferingId = ""; // patel security zone

  var name = 'bidder';
  var newname = 'Kam newd Group';


  it('resourcegroup.createGroup', function (done) {
    var data = {
      siteId: siteid,
      computeResourceId: compute['dev'],
      templateResourceId: template['dev'],
      securityResourceId: securityZone['dev'],
      name: name + Math.floor((Math.random()*1000))+1,
    }
    c3Sdk.createGroup(data, function (err, result) {
    console.log('err: ', err);
    log.json(result);
    done();
     });
  });

  it('resourcegroup.updateGroup', function (done) {
    var data = {
      id: id,
      computeResourceId: compute['local'],
      templateResourceId: template['local'],
      securityResourceId: securityZone['local'],
      name: newname,
    };
   c3Sdk.updateGroup(data, function (err, result) {
   console.log('err: ', err);
   log.json(result);
   done();
   });
  });


  it('resourcegroup.destroyGroup', function (done) {
    var data = {
      id: id,
    };
   c3Sdk.deleteGroup(data, function (err, result) {
   console.log('err: ', err);
   log.json(result);
   done();
   });
  });
 
   it('resourcegroup.groupDetails', function (done) {
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


  it('resourcegroup.createServer', function (done) {
    var data = {
      id: id,
    };
   c3Sdk.createServerGroup(data, function (err, result) {
   console.log('err: ', err);
   log.json(result);
   done();
   });
  });


  it('resourcegroup.destroyServer', function (done) {
    var data = {
      id: id,
    };
   c3Sdk.deleteServerGroup(data, function (err, result) {
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