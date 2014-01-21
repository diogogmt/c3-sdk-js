var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log

    describe('securityZone.cloudstack', function() {

        this.timeout(1500000);

        var id = '3d666202-fc30-457a-89c0-851e4f1272e6';

        var name = 'APIV2SecurtyZone';
        var desc = 'SZDesc';

        var rename = 'APIV2SecurtyZoneRename';

        var gateway = '10.13.1.1';
        var netmask = '255.255.255.0';

        var vpcId = '5370c7b5-4680-4a3b-8c84-c90c446f0886';

        var supportedServices = 'Lb';

        it('securityZone.cs.create', function(done) {
            var cmd = 'securityZoneCreate';
            var data = {
                siteId: 2,
                name: name + Math.floor((Math.random() * 1000)) + 1,
                desc: desc + Math.floor((Math.random() * 1000)) + 1,
                gateway: gateway,
                netmask: netmask,
                vpcId: vpcId,
            };
            c3Sdk.createSecurityZone(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('securityZone.cs.update', function(done) {
            var cmd = 'securityZoneUpdate';
            var data = {
                id: id,
                name: rename + Math.floor((Math.random() * 1000)) + 1,
            };
            c3Sdk.updateSecurityZone(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('securityZone.cs.destroy', function(done) {
            var cmd = 'securityZoneDestroy';
            var data = {
                id: id,
            };
            c3Sdk.destroySecurityZone(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('securityZone.cs.details', function(done) {
            var cmd = 'securityZoneDetails';
            var data = {
                id: id,
            };
            c3Sdk.securityZoneDetails(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('securityZone.cs.list', function(done) {
            var cmd = 'securityZoneList';
            var data = {
                siteIds: '1,2',
                // supportedServices: supportedServices
            };
            c3Sdk.listSecurityZones(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });


    })