var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log

describe('loadbalancer.cloudstack', function () {

  this.timeout(1500000);

  var id = 'd2c993f4-9e90-47f9-9fcb-6e7116d7ecee';
  var name = 'V2Loabalancer';

  var vpcId = 'f59a839d-1107-4fa3-a523-c386ff8ba895';
  var subnetId = '2552496e-edf8-4f71-adb6-4f573418de7e';

  var forLoadbalancing = true;

  var resourceId = 'f09d6036-28ef-417d-b78c-ccd9da6ccc5e'

  it('loadbalancer.cs.create', function (done) {
    var cmd = 'loadbalancerCreate';
    var data = {
      siteId: 2,
      name: name + Math.floor((Math.random()*10000))+1,
      subnetId: subnetId,
      vpcId: vpcId
    };
    c3Sdk.createLoadbalancer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('loadbalancer.cs.destroy', function (done) {
    var cmd = 'loadbalancerDestroy';
    var data = {
      id: id,
    };
    c3Sdk.destroyLoadbalancer(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('loadbalancer.cs.details', function (done) {
    var cmd = 'loadbalancerDetails';
    var data = {
      id: id,
    };
    c3Sdk.loadbalancerDetails(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('loadbalancer.cs.list', function (done) {
    var cmd = 'loadbalancerList';
    var data = {
      siteIds: '2',
    };
    c3Sdk.listLoadbalancers(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('loadbalancer.cs.ipsList', function (done) {
    var cmd = 'loadbalancerListIps';
    var data = {
      siteId: '2',
      // subnetId: subnetId,
      // forLoadbalancing: forLoadbalancing,
      // vpcId: vpcId
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });


})

