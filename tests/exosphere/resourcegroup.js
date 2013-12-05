var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , prettyjson = require('prettyjson')
  , log = require('../config').log

describe('resourceGroup', function () {

  this.timeout(1500000);

  var id = 5;
  var siteid = 1;
  var accountid = 4;

  var computeOfferingId = "f89abdd8-57b7-11e3-b070-be159b62ffc0";  // small instance
  var templateOfferingId = "f899b514-57b7-11e3-b070-be159b62ffc0"; // template CentOS 6.1  
  var securityOfferingId = "f3d20dbe-052d-407b-a69c-c02b07382e5e"; // patel security zone

  var name = 'Kam what Group';
  var newname = 'Kam newd Group';


  it('resourcegroup.create', function (done) {
    var data = {
      siteId: siteid,
      computeResourceId: computeOfferingId,
      templateResourceId: templateOfferingId,
      securityResourceId: securityOfferingId,
      name: name,
    }
    c3Sdk.createGroup(data, function (err, result) {
    console.log('err: ', err);
    log.json(result);
    done();
     });
  });

  it('resourcegroup.update', function (done) {
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

  it('resourcegroup.delete', function (done) {
    var data = {
      id: id,
    };
   c3Sdk.deleteGroup(data, function (err, result) {
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


})