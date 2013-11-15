var _ = require('underscore');

var image = require('./v1/image');
var identity = require('./v2/identity');
var compute = require('./v2/compute');
var network = require('./v2/network');

exports.all = _.union(image, identity, compute, network);