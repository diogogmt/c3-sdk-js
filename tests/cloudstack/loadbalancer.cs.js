var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log;

describe('loadbalancer.cloudstack', function() {

    this.timeout(1500000);

    var id = '69cb3170-2cbd-471c-a0aa-1ef79ed2e4e5';
    var name = 'V2Loabalancer';

    var vpcId = 'd7f98f85-48dd-4945-a927-df1a337369ac';
    var securityZoneId = 'b76067d4-68cc-468d-9c37-c2aa0e447258';

    var forLoadbalancing = true;

    it('loadbalancer.cs.create', function(done) {
        var cmd = 'loadbalancerCreate';
        var data = {
            siteId: 2,
            name: name + Math.floor((Math.random() * 10000)) + 1,
            securityZoneId: securityZoneId,
            vpcId: vpcId
        };
        c3Sdk.createLoadbalancer(data, function(err, result) {
            console.log('err: ', err);
            log.json(result);
            done();
        });
    });

    it('loadbalancer.cs.destroy', function(done) {
        var cmd = 'loadbalancerDestroy';
        var data = {
            id: id,
        };
        c3Sdk.destroyLoadbalancer(data, function(err, result) {
            console.log('err: ', err);
            log.json(result);
            done();
        });
    });

    it('loadbalancer.cs.details', function(done) {
        var cmd = 'loadbalancerDetails';
        var data = {
            id: id,
        };
        c3Sdk.loadbalancerDetails(data, function(err, result) {
            console.log('err: ', err);
            log.json(result);
            done();
        });
    });

    it('loadbalancer.cs.list', function(done) {
        var cmd = 'loadbalancerList';
        var data = {
            siteIds: '2',
        };
        c3Sdk.listLoadbalancers(data, function(err, result) {
            console.log('err: ', err);
            log.json(result);
            done();
        });
    });

    it('loadbalancer.cs.ipsList', function(done) {
        var cmd = 'loadbalancerListIps';
        var data = {
            siteId: '2',
            // securityZoneId: securityZoneId,
            // forLoadbalancing: forLoadbalancing,
            // vpcId: vpcId
        };
        c3Sdk.exec(cmd, data, function(err, result) {
            console.log('err: ', err);
            log.json(result);
            done();
        });
    });


})