var assert = require('assert'),
    c3Sdk = require('../config').c3Sdk,
    prettyjson = require('prettyjson'),
    log = require('../config').log

    describe('server.cloudstack', function() {

        this.timeout(1500000);

        var id = '4a05e2b1-d235-489e-bf19-448585308be1';
        var name = 'ServerTestAPIV2';

        var templateId = 'f890b6bd-aa5d-4241-860d-9ce8b9c17138'; // cento
        // var templateId = '2be8ee7b-edaf-455c-a2f2-cbf41d9d055b'; // windows
        // var templateId = 'acb2d989-34bc-4d0c-a17a-558f011873e4'; // ISO

        var securityZoneId = '5e09c5f4-378e-44d4-a27c-a13c4f544bc9'; //advance
        // var securityZoneId = '02a79b57-30af-41e6-8480-648cd25d1b5d'; // basic


        var smallOffering = 'a240fdbf-d515-4395-bedc-e31ae7e9ca8e';
        var mediumOffering = '419456c3-dedf-4a01-a79e-9a8079911a27';
        var xlargeOffering = '317b9f92-1924-4fcf-a0c5-276941dc7af8';
        var moreCpuOffering = '3943a905-579e-436d-b82c-46c097459e63';
        var moreMemoryOffering = '49e43700-7b31-4f67-88ea-ce99c0b0a991';

        var diskOfferingId = '1aaa56f3-f9a7-4bb3-a982-d827984c79fd';

        var start = false;

        var hypervisor = 'Xenserver';

        it('server.cs.create', function(done) {
            var cmd = 'serverCreate';
            var data = {
                siteId: 2,
                name: name + Math.floor((Math.random() * 10000)) + 1,
                state: false,
                offeringId: smallOffering,
                templateId: templateId,
                securityZoneId: securityZoneId,
                start: start,
                // diskOfferingId: diskOfferingId,
                // hypervisor: hypervisor
            }
            c3Sdk.createServer(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.update', function(done) {
            var cmd = 'serverUpdate';
            var data = {
                id: id,
                name: name + '-RENAMED-' + Math.floor((Math.random() * 10000)) + 1,
            };
            c3Sdk.updateServer(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.changeOffering', function(done) {
            var cmd = 'serverChangeOffering';
            var data = {
                id: id,
                offeringId: mediumOffering
            };
            c3Sdk.changeServerOffering(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.destroy', function(done) {
            var cmd = 'serverDestroy';
            var data = {
                id: id,
            };
            c3Sdk.destroyServer(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.start', function(done) {
            var cmd = 'serverStart';
            var data = {
                id: id,
            };
            c3Sdk.startServer(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.stop', function(done) {
            var cmd = 'serverStop';
            var data = {
                id: id,
            };
            c3Sdk.stopServer(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.reboot', function(done) {
            var cmd = 'serverReboot';
            var data = {
                id: id,
            };
            c3Sdk.rebootServer(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.recover', function(done) {
            var cmd = 'serverRecover';
            var data = {
                id: id,
            };
            c3Sdk.recoverServer(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.enableSnat', function(done) {
            var cmd = 'serverEnableSnat';
            var data = {
                id: id
            };
            c3Sdk.serverEnableSnat(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.disableSnat', function(done) {
            var cmd = 'serverDisableSnat';
            var data = {
                id: id,
            };
            c3Sdk.serverDisableSnat(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.calculateCru', function(done) {
            var data = {
                siteId: 2,
                offeringId: smallOffering,
                templateId: templateId,
                // diskSize: 20
                diskOfferingId: xlargeOffering
            }
            c3Sdk.serverCalculateCru(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.details', function(done) {
            var cmd = 'serverDetails';
            var data = {
                id: id,
            };
            c3Sdk.serverDetails(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

        it('server.cs.list', function(done) {
            var cmd = 'serverList';
            var data = {
                siteIds: '',
            };
            c3Sdk.listServers(data, function(err, result) {
                console.log('err: ', err);
                log.json(result);
                done();
            });
        });

    })