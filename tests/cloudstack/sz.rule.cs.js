var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk

describe('securityZoneRule.cloudstack', function () {

  this.timeout(1500000);

  var ruleId = '4df1b398-b7f6-41c9-a6c1-dd96087ffb8a';
  var securityZoneId = '32f15072-80f7-4fe1-ab9d-6c0a50a08571';

  it('securityZoneRule.cs.createRule', function (done) {
    var cmd = 'securityZoneCreateRule';
    var data = {
      securityZoneId: securityZoneId,
      protocol: 'udp',
      startPort: 883,
      endPort: 999,
      trafficType: 'ingress',
      cidr: '0.0.0.0/24',
      // ruleNumber: 103,
      // ruleAction: 'allow',
    };
    c3Sdk.createSecurityZoneRule(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });  

  it('securityZoneRule.cs.destroyRule', function (done) {
    var cmd = 'securityZoneDestroyRule';
    var data = {
      ruleId: ruleId,
      securityZoneId: securityZoneId,
      trafficType: 'ingress'  
    };
    c3Sdk.destroySecurityZoneRule(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('securityZoneRule.cs.detailsRule', function (done) {
    var cmd = 'securityZoneRuleDetails';
    var data = {
      ruleId: ruleId,
      securityZoneId: securityZoneId
    };
    c3Sdk.securityZoneRuleDetails(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('securityZoneRule.cs.listRule', function (done) {
    var cmd = 'securityZoneListRule';
    var data = {
      securityZoneId: securityZoneId
    };
    c3Sdk.listSecurityZoneRules(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });


})

