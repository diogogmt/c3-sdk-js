var _ = require('underscore');

var token = require('./v2/token');
var vpc = require('./v2/vpc');

var iso = require('./v2/iso');
var loadbalancer = require('./v2/loadbalancer');
var offering = require('./v2/offering');
var ip = require('./v2/ip');
var securityZone = require('./v2/security-zone');
var server = require('./v2/server');
var snapshot = require('./v2/snapshot');
var snapshotPolicy = require('./v2/snapshot-policy');
var volume = require('./v2/volume');
var template = require('./v2/template');
var token = require('./v2/token');
var vpc = require('./v2/vpc');
var vpn = require('./v2/vpn');
var resourcegroup = require('./v2/resourcegroup');
var doc = require('./v2/doc');
var job = require('./v2/job');

exports.all = _.union(iso, loadbalancer, offering, ip, ip, securityZone, server, snapshot, snapshotPolicy, volume, template, token, vpc, vpn,resourcegroup, doc, job);