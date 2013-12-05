var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , prettyjson = require('prettyjson')
  , log = require('../config').log

describe('resourceGroup', function () {

  this.timeout(1500000);

  var id = 2;
  var siteid = 1;
  var accountid = 4;

  var computeOfferingId = "f89abdd8-57b7-11e3-b070-be159b62ffc0";  // small instance
  var templateOfferingId = "f899be10-57b7-11e3-b070-be159b62ffc0"; // template CentOS 6.1  
  var securityOfferingId = "c98a6420-0fec-4ad3-86f7-ed709e0897ec"; // patel security zone

  var name = 'Kam db2 Group';
  var newname = 'Kam newd Group';


  it('resourcegroup.create', function (done) {
    var data = {
      siteId: siteid,
      accountId: accountid,
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
      siteId: siteid,
      accountId: accountid,
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
 

})