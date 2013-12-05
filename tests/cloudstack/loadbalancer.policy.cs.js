var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log



describe('loadbalancer.cloudstack', function () {

  this.timeout(1500000);

  var id = '';
  var subnetId = '';
  var vpcId = '';
  var loadbalancerId = 'fcf2cf89-8f6a-48f2-8ad3-62ed0a157b43';
  var ruleId = '0d21ee1e-9a1a-4693-87fa-14fbde4149c0';
  var name = 'LoabalancerPolicy';
  var desc = 'LoabalancerPolicyDesc';

  // Source Base policy
  var method = 'SourceBased'
  var policies = [
    {
      name: 'tableSize',
      value: 10,
    },
    {
      name: 'expire',
      value: 'never',
    }
  ]

  // // App Cookie policy
  // var method = 'AppCookie'
  // var policies = [
  //   {
  //     name: 'cookie-name',
  //     value: 10,
  //   },
  //   {
  //     name: 'mode',
  //     value: 1234,
  //   },
  //   {
  //     name: 'length',
  //     value: 5678,
  //   },
  //   {
  //     name: 'holdtime',
  //     value: 'none',
  //   },
  //   {
  //     name: 'request-learn',
  //     value: 'true',
  //   },
  //   {
  //     name: 'prefix',
  //     value: true,
  //   }
  // ]
  
  // // Lb Cookie policy
  // var method = 'LbCookie'
  // var policies = [
  //   {
  //     name: 'cookie-name',
  //     value: 'cookieName',
  //   },
  //   {
  //     name: 'mode',
  //     value: 'mode',
  //   },
  //   {
  //     name: 'nocache',
  //     value: 'true',
  //   },
  //   {
  //     name: 'indirect',
  //     value: 'true',
  //   },
  //   {
  //     name: 'postonly',
  //     value: 'true',
  //   },
  //   {
  //     name: 'domain',
  //     value: 'domain.com',
  //   }
  // ]


  it('loadbalancer.cs.createPolicy', function (done) {
    var cmd = 'loadbalancerCreatePolicy';
    var data = {
      name: name + Math.floor((Math.random()*1000))+1,
      desc: desc + Math.floor((Math.random()*1000))+1,
      loadbalancerId: loadbalancerId,
      ruleId: ruleId,
      method: method,
      policies: policies
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('loadbalancer.cs.destroyPolicy', function (done) {
    var cmd = 'loadbalancerDestroyPolicy';
    var data = {
      id: id,
      loadbalancerId: loadbalancerId
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('loadbalancer.cs.listPolicy', function (done) {
    var cmd = 'loadbalancerListPolicy';
    var data = {
      loadbalancerId: loadbalancerId,
      ruleId: ruleId
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });


})
