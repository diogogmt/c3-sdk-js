var _ = require('underscore');

var token = require('./v2/token');
var vpc = require('./v2/vpc');

exports.all = _.union(token, vpc);