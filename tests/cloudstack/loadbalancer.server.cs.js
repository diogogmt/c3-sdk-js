var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log

describe('loadbalancer.cloudstack', function () {

  this.timeout(1500000);

  var id = '';
  var loadbalancerId = 'b32497c8-81df-4f3e-98ad-c11173985d32';
  var ruleId = 'b150b2dd-b2ca-43cd-9913-45a171d29732';
  var serverId = 'cec1262a-c4d3-4e61-81a5-be07d2b6b5e9';

  it('loadbalancer.cs.addServer', function (done) {
    var cmd = 'loadbalancerAddServer';
    var data = {
      loadbalancerId: loadbalancerId,
      id:  ruleId,
      serverId: serverId
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('loadbalancer.cs.removeServer', function (done) {
    var cmd = 'loadbalancerRemoveServer';
    var data = {
      loadbalancerId: loadbalancerId,
      ruleId:  ruleId,
      serverId: serverId
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('loadbalancer.cs.listServer', function (done) {
    var cmd = 'loadbalancerListServer';
    var data = {
      loadbalancerId: loadbalancerId,
      id:  ruleId,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });


})

