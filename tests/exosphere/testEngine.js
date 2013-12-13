// Load the AWS SDK for Node.js
var AWS1 = require('aws-sdk');
var _ = require('underscore');

/**
 * Don't hard-code your credentials!
 * Load them from disk or your environment instead.
 */
AWS1.config.update({accessKeyId: 'AKIAJWSJDK4HBS2B2HMQ', secretAccessKey: 'kscPT4NDPUFMR6OsDtdJP1SeB3ntW1sTq5Ri5vQi'});
// Set your region for future requests.
AWS1.config.update({region: 'us-east-1'});

// Create a bucket using bound parameters and put something in it.
// Make sure to change the bucket name from "myBucket" to something unique.
var ec2 = new AWS1.EC2();

// &ImageId=ami-beb0caec
// &InstanceType=m1.large
// &MaxCount=1
// &MinCount=1
// &KeyName=my-key-pair
// &NetworkInterface.0.DeviceIndex=0
// &NetworkInterface.0.PrivateIpAddresses.0.Primary=true
// &NetworkInterface.0.PrivateIpAddresses.0.PrivateIpAddress=10.0.2.106
// &NetworkInterface.0.PrivateIpAddresses.1.Primary=false
// &NetworkInterface.0.PrivateIpAddresses.1.PrivateIpAddress=10.0.2.107
// &NetworkInterface.0.PrivateIpAddresses.2.Primary=false
// &NetworkInterface.0.PrivateIpAddresses.2.PrivateIpAddress=10.0.2.108
// &NetworkInterface.0.SubnetId=subnet-a61dafcf

var args = {
  ImageId: 'imageId',
  MaxCount: 1,
  MinCount: 1,
  NetworkInterfaces: [
    {
      DeviceIndex: 0,
      // PrivateIpAddress: '10.0.0.0',
      Groups: [
        'group1',
        'group2',
      ]
    },
    {
      DeviceIndex: 1,
      PrivateIpAddress: '10.0.0.1',
    }
  ]
}
// ec2.runInstances(args, function (err, data) {
//   console.log('\n\n\n---ec2.runInstances callback');
//   console.log('err: ', err);
//   console.log('data: ', data);
// })


var params = {
  // ImageId: 'imageId',
  // MaxCount: 1,
  // MinCount: 1,
  NetworkInterfaces: [

    {
      DeviceIndex: 0,
      PrivateIpAddress: '10.0.0.0',
      Groups: [
        'group1',
        'group2',
      ]
    },

    {
      DeviceIndex: 1,
      PrivateIpAddress: '10.0.0.1',
    }

  ]
}

  var policies = [
    {
      name: 'tableSize',
      value: 10,
    },
    {
      name: 'expire',
      value: 'never',
    }
  ]

  var sites = [
    {
      id: 10,
      name: 'siteAAA',
    },
    {
      id: 20,
      name: 'siteBBB',
    },
  ]

var ruleId = '5dc52c93-ebaa-4494-af9d-bce6f2c2fd99';
var name = 'LoabalancerPolicy';
var desc = 'LoabalancerPolicyDesc';
var method = 'SourceBased'

params = {
  command: 'loadbalancerCreatePolicy',
  name: name + Math.floor((Math.random()*1000))+1,
  desc: desc + Math.floor((Math.random()*1000))+1,
  ruleId: ruleId,
  method: method,
  policies: policies,
  sites: sites
};


var util = {
  each: function each(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var ret = iterFunction.call(this, key, object[key]);
      }
    }
  },
};

function QueryParamSerializer() {
}

QueryParamSerializer.prototype.serialize = function serialize(params, fn) {
  this.serializeStructure('', params, fn);
}

QueryParamSerializer.prototype.serializeStructure = function serializeStructure(prefix, struct, fn) {
  var that = this;
  util.each(struct, function (name, member) {
    name = prefix ? prefix + '.' + name : name;
    that.serializeMember(name, member, fn);
  });
}

QueryParamSerializer.prototype.serializeList = function serializeList(name, list, fn) {
  var that = this;
  _.each(list, function (v, n) { 
    var suffix = '.' + (n + 1);
    that.serializeMember(name + suffix, v, fn);
  });
}

QueryParamSerializer.prototype.serializeMember = function serializeMember(name, value, fn) {
  if (_.isArray(value)) {
    this.serializeList(name, value, fn);
  } else if (_.isObject(value)) {
    this.serializeStructure(name, value, fn);
  }  else {
    fn.call(this, name, String(value));
  }
}

var buildRequest = function buildRequest(params) {
  var httpRequest = {
    params: {}
  }
  var builder = new QueryParamSerializer();
  builder.serialize(params, function(name, value) {
    httpRequest.params[name] = value;
  });
  console.log('httpRequest.params: ', httpRequest.params);
}

buildRequest(params);

