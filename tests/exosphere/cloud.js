var assert = require('assert')
  , c3Sdk = require('./config').c3Sdk
  , prettyjson = require('prettyjson')

describe('cloud.cloudstack', function () {

  this.timeout(1500000);

  var ns = 'a5';
  var accountDisplayName = ns + 'admin';
  var status = 'active';
  var parentAccountId = 1;
  var allocatedCru = 10;
  var createdBy = 'Owner system';

  var cloudName = ns;
  var cruCost = 1;
  var cruFrquency = 'H';
  var cloudParentId = 1;

  var email = ns + '@admin.com';
  var firstName = ns + 'admin';
  var lastName = ns + 'admin';
  var roleIds = [ 3 ];
  var userName = ns + 'admin';

  

  it('cloud.cs.create', function (done) {
    var cmd = 'cloudCreate';
    var data = {
      account: {
        displayname: accountDisplayName,
        status status,
        parentaccountid: parentAccountId,
        allocatedcru: allocatedCru,
        createdby: createdBy,
        cloud: {
          name: cloudName,
          crucost: cruCost,
          crufrequency: cruFrquency,
          parentid: cloudParentId
        },
        sites: [
          {
            siteId: 5,
          }
        ],
        users: [
          {
            email: email,
            firstname: firstName,
            lastname: lastName,
            roleids: roleIds,
            username: userName
          }
        ],
        
      }
    }
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.update', function (done) {
    var cmd = 'cloudUpdate';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.changeOffering', function (done) {
    var cmd = 'cloudChangeOffering';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.destroy', function (done) {
    var cmd = 'cloudDestroy';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.start', function (done) {
    var cmd = 'cloudStart';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.stop', function (done) {
    var cmd = 'cloudStop';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.reboot', function (done) {
    var cmd = 'cloudReboot';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.enableSnat', function (done) {
    var cmd = 'cloudEnableSnat';
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

  it('cloud.cs.disableSnat', function (done) {
    var cmd = 'cloudDisableSnat';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.calculateCru', function (done) {
    var cmd = 'cloudCalculateCru';
    var data = {
      siteId: 1,
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

  it('cloud.cs.details', function (done) {
    var cmd = 'cloudDetails';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('cloud.cs.list', function (done) {
    var cmd = 'cloudList';
    var data = {
      siteIds: '1,2',
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

})

