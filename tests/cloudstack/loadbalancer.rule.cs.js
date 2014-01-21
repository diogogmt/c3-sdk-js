var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log

    describe('loadbalancer.cloudstack', function() {

        this.timeout(1500000);

        var id = '';
        var subnetId = '';
        var vpcId = '';
        var loadbalancerId = '08697ff3-59fb-44fd-b57b-2dbf6c314ea7';
        var name = 'V2LoabalancerRule';
        var cidr = '0.0.0.0/0';

        it('loadbalancer.cs.createRule', function(done) {
            var data = {
                loadbalancerId: loadbalancerId,
                name: name + Math.floor((Math.random() * 1000)) + 1,
                algorithm: 'roundrobin',
                privatePort: 82,
                publicPort: 82,
                // cidr: cidr,
            };
            c3Sdk.creatLoadbalancerRule(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('loadbalancer.cs.destroyRule', function(done) {
            var data = {
                id: id,
                loadbalancerId: loadbalancerId
            };
            c3Sdk.destroyLoadbalancerRule(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('loadbalancer.cs.listRule', function(done) {
            var data = {
                loadbalancerId: loadbalancerId
            };
            c3Sdk.listLoadbalancerRules(data, function(err, result) {
                console.log('err: ', err);
                console.log('result: ', result);
                done();
            });
        });


    })