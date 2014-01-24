var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    log = require('../config').log

describe('template.cloudstack', function() {

    this.timeout(1500000);

    var id = '1bb179b4-35d1-11e3-a6fd-3a96760eadba'; // custom

    var name = "V2TemplateTest"

    it('template.cs.rawDetails', function(done) {
      var data = {
        id: id,
        siteId: 2,
      };
      c3Sdk.rawTemplateDetails(data, function(err, result) {
        console.log('err: ', err);
        console.log('result: ', result);
        done();
      });
    });

    it('template.cs.rawList', function(done) {
      var cmd = 'templateList';
      var data = {
        siteIds: '1',
      };
      c3Sdk.listRawTemplates(data, function(err, result) {
        console.log('err: ', err);
        console.log('result: ', result);
        done();
      });
    });

})