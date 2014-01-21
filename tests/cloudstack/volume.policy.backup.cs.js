var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log

    describe('volumeBackup.cloudstack', function() {

        this.timeout(1500000);

        var id = '9d9e5101-d3d3-4b1f-a99d-900077adde4d';
        var volumeId = 'ff5f8790-b90e-41bc-8755-e68cdfd640fc';

        var name = 'volumeBackupTest';

        var maxSnaps = 4;
        var timezone = 'Etc/GMT+12';

        // Hourly
        var hourly = 'HOURLY';
        var hourlyScheduleDate = '11:11';

        // Daily
        var daily = 'DAILY';
        var dailyScheduleDate = '00:1';

        // Weekly
        var weekly = 'WEEKLY';
        var weeklyScheduleDate = '00:1:1';

        // Monthly
        var monthly = 'MONTHLY';
        var monthlyScheduleDate = '00:1:1';

        it('volumeBackup.cs.create', function(done) {
            var data = {
                name: name + Math.floor((Math.random() * 1000)) + 1,
                volumeId: volumeId,
                type: hourly,
                scheduleDate: hourlyScheduleDate,
                maxSnaps: maxSnaps,
                timezone: timezone
            };
            c3Sdk.createVolumeBackup(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volumeBackup.cs.destroy', function(done) {
            var data = {
                backupId: id,
            };
            c3Sdk.destroyVolumeBackup(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volumeBackup.cs.details', function(done) {
            var data = {
                id: id,
            };
            c3Sdk.volumeBackupDetails(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('volumeBackup.cs.list', function(done) {
            var data = {
                siteIds: '2',
                volumeId: volumeId,
            };
            c3Sdk.listVolumeBackups(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });


    })