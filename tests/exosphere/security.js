var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log

describe('security.exosphere', function() {

    this.timeout(1500000);
  
    var moduleId = '20';
    var moduleName = 'NewModuleNameUPDATED'

    it('security.cs.createRole', function(done) {
        var data = {
        };
        c3Sdk.createRole(data, function(err, result) {
          console.log('err: ', err);
          console.log('result: ', result);
          done();
        });
    });

    it('security.cs.createModule', function(done) {
        var data = {
          name: moduleName
        };
        c3Sdk.createModule(data, function(err, result) {
          console.log('err: ', err);
          console.log('result: ', result);
          done();
        });
    });

    it('security.cs.updateModule', function(done) {
        var data = {
          id: moduleId,
          name: moduleName
        };
        c3Sdk.updateModule(data, function(err, result) {
          console.log('err: ', err);
          console.log('result: ', result);
          done();
        });
    });

    it('security.cs.moduleDetails', function(done) {
        var data = {
          id: moduleId,
        };
        c3Sdk.moduleDetails(data, function(err, result) {
          console.log('err: ', err);
          console.log('result: ', result);
          done();
        });
    });

    it('security.cs.listModules', function(done) {
        var data = {
        };
        c3Sdk.listModules(data, function(err, result) {
          console.log('err: ', err);
          console.log('result: ', result);
          done();
        });
    });

    it('security.cs.listRoles', function(done) {
        var data = {
        };
        c3Sdk.listRoles(data, function(err, result) {
          console.log('err: ', err);
          console.log('result: ', result);
          log.json(result);
          done();
        });
    });

})