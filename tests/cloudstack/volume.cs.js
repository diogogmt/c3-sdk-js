var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log

    describe('volume.cloudstack', function() {

        this.timeout(1500000);

        var id = '7d267d5b-5a1c-47e7-a6c9-ebbcd24b7288';
        var name = 'V2VolumeName';

        var snapshotId = 'a020ae98-d499-4703-819f-4cc0fc09114e';
        var serverId = '230dc6a1-6636-40c3-a500-9470f2d68fc8';

        var smallOffering = 'c6ba6ba3-280b-4247-b854-ae33ffc31d46';
        var mediumOffering = '0d07ffd5-4dc7-4058-886d-abf611367115';
        var largeOffering = '6460d509-d13e-4895-a247-de41f703f353';
        var customOffering = '659a9e9e-2fd1-487c-be37-bf685e87a115';

        it('volume.cs.create', function(done) {
            var cmd = 'volumeCreate';
            var data = {
                siteId: 2,
                name: name + Math.floor((Math.random() * 1000)) + 1,
                offeringId: smallOffering,
                // snapshotId: snapshotId,
            };
            c3Sdk.createVolume(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volume.cs.destroy', function(done) {
            var cmd = 'volumeDestroy';
            var data = {
                id: id,
            };
            c3Sdk.destroyVolume(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volume.cs.attach', function(done) {
            var cmd = 'volumeAttach';
            var data = {
                id: id,
                serverId: serverId
            };
            c3Sdk.attachVolume(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volume.cs.detach', function(done) {
            var cmd = 'volumeDetach';
            var data = {
                id: id,
                // serverId: serverId,
                // deviceId: 4,
            };
            c3Sdk.detachVolume(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volume.cs.details', function(done) {
            var cmd = 'volumeDetails';
            var data = {
                id: id,
            };
            c3Sdk.volumeDetails(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volume.cs.list', function(done) {
            var cmd = 'volumeList';
            var data = {
                siteIds: ''
            };
            c3Sdk.listVolumes(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volume.cs.calculateCru', function(done) {
            var cmd = 'volumeCalculateCru';
            var data = {
                // id: id,
                siteId: 2,
                // size: 0,
                // snapshotId: snapshotId,
                offeringId: smallOffering
            };
            c3Sdk.calculateVolumeCru(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

    })