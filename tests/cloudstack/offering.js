var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , prettyjson = require('prettyjson')

describe('server.cloudstack', function () {

  this.timeout(1500000);

  var networkOfferingName = 'DefaultIsolatedNetworkOfferingForVpcNetworksWithInternalLB';
  var forVpc = true;
  var state = 'Enabled';
  var supportedServices = 'Lb';

  var type = 'template';
  it('offering.listOfferings', function (done) {
    var data = {
      siteId: 1,
      type: type,
    };
    c3Sdk.listOfferings(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  // it('offering.hypervisorList', function (done) {
  //   var cmd = 'offeringHypervisorList';
  //   var data = {
  //     siteId: 1,
  //   };
  //   c3Sdk.exec(cmd, data, function (err, result) {
  //     console.log('err: ', err);
  //     console.log('result: ', result);
  //     done();
  //   });
  // });

  // it('offering.serverList', function (done) {
  //   var cmd = 'offeringServerList';
  //   var data = {
  //     siteId: 2,
  //   };
  //   c3Sdk.exec(cmd, data, function (err, result) {
  //     console.log('err: ', err);
  //     console.log('result: ', result);
  //     done();
  //   });
  // });

  // it('offering.diskList', function (done) {
  //   var cmd = 'offeringDiskList';
  //   var data = {
  //     siteId: 2,
  //   };
  //   c3Sdk.exec(cmd, data, function (err, result) {
  //     console.log('err: ', err);
  //     console.log('result: ', result);
  //     done();
  //   });
  // });

  // it('offering.osList', function (done) {
  //   var cmd = 'offeringOsList';
  //   var data = {
  //     siteId: 1,
  //   };
  //   c3Sdk.exec(cmd, data, function (err, result) {
  //     console.log('err: ', err);
  //     console.log('result: ', result);
  //     done();
  //   });
  // });

  // it('offering.networkList', function (done) {
  //   var cmd = 'offeringNetworkList';
  //   var data = {
  //     siteId: 2,
  //   };
  //   c3Sdk.exec(cmd, data, function (err, result) {
  //     console.log('err: ', err);
  //     console.log('result: ', result);
  //     done();
  //   });
  // });

  // it('offering.defaultVpc', function (done) {
  //   var cmd = 'offeringDefaultVpcDetails';
  //   var data = {
  //     siteId: 2,
  //   };
  //   c3Sdk.exec(cmd, data, function (err, result) {
  //     console.log('err: ', err);
  //     console.log('result: ', result);
  //     done();
  //   });
  // });

  // it('offering.findNetworkk', function (done) {
  //   var cmd = 'findNetworkOffering';
  //   var data = {
  //     siteId: 2,
  //     name: networkOfferingName,
  //     state: state,
  //     forVpc: forVpc,
  //     supportedServices: supportedServices
  //   };
  //   c3Sdk.exec(cmd, data, function (err, result) {
  //     console.log('err: ', err);
  //     console.log('result: ', result);
  //     done();
  //   });
  // });

  

})

