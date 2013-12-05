var assert = require('assert')
  , c3Sdk = require('../config').c3Sdk
  , log = require('../config').log

describe('vpn.cloudstack', function () {

  this.timeout(1500000);

  var vpcId = '58ec90af-27df-4671-854d-f14a0af8c576';

  var id = '0d0bea68-b110-4248-b39a-8ba4ce2bf0e2';
  var name = 'VpnConn';
  
  var gatewayIp = "10.40.24.30";
  var cidr = "10.1.0.0/22";
  var ipSecPsk = "cdi12345";
  // var ikePolicy = "3des-md5";
  var ikeEncryption = '3des';
  var ikeHash = 'md5'
  var ikeLifetime = 86400;
  var ikeDh = '';
  // var ikeDh = 'modp1024';
  // var espPolicy = "3des-md5";
  var espEncryption = '3des';
  var espHash = 'md5'
  var espLifetime = 3600;
  // var espDh = 'modp1024'; // perfect forward secrecy
  var espDh = ''; // perfect forward secrecy
  var dpd = true;

  it('vpn.cs.create', function (done) {
    var cmd = 'vpnConnectionCreate';
    var data = {
      vpcId: vpcId,
      name: name + Math.floor((Math.random()*1000))+1,
      gatewayIp: gatewayIp,
      cidr: cidr,
      ipSecPsk: ipSecPsk,
      ikeEncryption: ikeEncryption,
      ikeHash: ikeHash,
      ikeLifeTime: ikeLifetime,
      ikeDh: ikeDh,
      espEncryption: espEncryption,
      espHash: espHash,
      espLifeTime: espLifetime,
      espDh: espDh,
      dpd: dpd,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpn.cs.destroy', function (done) {
    var cmd = 'vpnConnectionDestroy';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpn.cs.reset', function (done) {
    var cmd = 'vpnConnectionReset';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpn.cs.details', function (done) {
    var cmd = 'vpnConnectionDetails';
    var data = {
      id: id,
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });

  it('vpn.cs.list', function (done) {
    var cmd = 'vpnConnectionList';
    var data = {
      siteIds: '1,2',
    };
    c3Sdk.exec(cmd, data, function (err, result) {
      console.log('err: ', err);
      log.json(result);
      done();
    });
  });


})

