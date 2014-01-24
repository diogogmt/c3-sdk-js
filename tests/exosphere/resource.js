var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log

describe('resource.exosphere', function() {

    this.timeout(1500000);

    var id = '1bb179b4-35d1-11e3-a6fd-3a96760eadba'; // custom
    var siteId = 1;
    var accountId = 2;
    var userId = 2;
    var siteResourceId = '1bb179b4-35d1-11e3-a6fd-3a96760eadba';
    
    var name = "TemplateResourceTest";
    var state = 'ONLINE';
    var type = 'TEMPLATE';
    var cru = 4.20;
    var component = {};

    it('resource.cs.create', function(done) {
      var data = {
        siteId: siteId,
        accountId: accountId,
        userId: userId,
        siteResourceId: siteResourceId,
        name: name,
        cru: cru,
        type: type,
        state: state,
        component: {}
      };
      c3Sdk.createResource(data, function(err, result) {
        console.log('err: ', err);
        console.log('result: ', result);
        done();
      });
    });

    it('resource.cs.update', function(done) {
      var data = {
        id: id,
        name: name + Math.floor((Math.random() * 1000)) + 1,
        state: state,
        cru: cru
      };
      c3Sdk.updateResource(data, function(err, result) {
        console.log('err: ', err);
        console.log('result: ', result);
        done();
      });
    });

    it('resource.cs.details', function(done) {
        var data = {
          resourceId: id,
        };
        c3Sdk.resourceDetails(data, function(err, result) {
            console.log('err: ', err);
            console.log('result: ', result);
            done();
        });
    });

    it('resource.cs.list', function(done) {
        var data = {
        };
        c3Sdk.listResources(data, function(err, result) {
          console.log('err: ', err);
          console.log('result: ', result);
          done();
        });
    });

})