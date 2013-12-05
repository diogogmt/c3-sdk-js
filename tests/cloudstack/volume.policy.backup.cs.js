var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log

describe('volumeBackup.cloudstack', function () {

  this.timeout(1500000);

  var id = '49c13758-8ae2-41dc-9862-8b640414fd15';
  var volumeId = 'bc0f52a5-6765-4d1f-9cc1-ae91df943c5d';

  var name = 'volumeBackupTest';

  var maxSnaps = 2;
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

  it('volumeBackup.cs.create', function (done) {
    var data = {
      name: name + Math.floor((Math.random()*1000))+1,
      volumeId: volumeId,
      type: hourly,
      scheduleDate: hourlyScheduleDate,
      maxSnaps: maxSnaps,
      timezone: timezone
    };
    c3Sdk.createVolumeBackup(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('volumeBackup.cs.destroy', function (done) {
    var data = {
      volumeId: volumeId,
      backupId: id,
    };
    c3Sdk.destroyVolumeBackup(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('volumeBackup.cs.details', function (done) {
    var data = {
      id: id,
    };
    c3Sdk.volumeBackupDetails(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('volumeBackup.cs.list', function (done) {
    var data = {
      siteIds: '1,2',
      volumeId: volumeId,
    };
    c3Sdk.listVolumeBackups(data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });


})

