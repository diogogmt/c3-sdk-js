var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log

    describe('snapshot.cloudstack', function() {

        this.timeout(1500000);

        var id = 'd7943c7a-ed09-4bab-97ee-644ad3b0eafd';
        var volumeId = 'a0d74783-db5f-4559-bf8f-273ac9833104';
        var name = 'V2SnapshotTest';

        it('snapshot.cs.create', function(done) {
            var cmd = 'snapshotCreate';
            var data = {
                name: name + Math.floor((Math.random() * 1000)) + 1,
                volumeId: volumeId,
            };
            c3Sdk.createSnapshot(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('snapshot.cs.destroy', function(done) {
            var cmd = 'snapshotDestroy';
            var data = {
                siteId: 2,
                id: id,
            };
            c3Sdk.destroySnapshot(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('snapshot.cs.details', function(done) {
            var cmd = 'snapshotDetails';
            var data = {
                id: id,
            };
            c3Sdk.snapshotDetails(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('snapshot.cs.list', function(done) {
            var cmd = 'snapshotList';
            var data = {
                siteIds: '2',
                // volumeId: volumeId,
                // interval: interval,
                // type: type,
            };
            c3Sdk.listSnapshots(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });


    })