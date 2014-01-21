var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , prettyjson = require('prettyjson')

describe('job.exosphere', function () {

  this.timeout(1500000);

  it('job.exosphere.notify', function (done) {
    var data = {
    };
    c3Sdk.notifyJob(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('job.exosphere.details', function (done) {
    var data = {
    };
    c3Sdk.jobDetails(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

  it('job.exosphere.list', function (done) {
    var data = {
      status: 'PENDING'
    };
    c3Sdk.listJobs(data, function (err, result) {
      console.log('err: ', err);
      console.log('result: ', result);
      done();
    });
  });

})

