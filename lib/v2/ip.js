module.exports =  [

  { name: 'acquireIp', uri: '​/ips', uriParams: [], service: '', type:'', method: 'post', resKey: 'ip' },

  { name: 'releaseIp', uri: '​/ips/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'ipDetails', uri: '​/ips/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'ip' },

  { name: 'listIps', uri: '​/ips', uriParams: [], service: '', type:'', method: 'get', resKey: 'ips' },

  { name: 'createIpRule', uri: '​/ips/:id/rules', uriParams: ['id'], service: '', type:'', method: 'post', resKey: 'rule' },

  { name: 'destroyIpRule', uri: '​/ips/:id/rules/:ruleId', uriParams: ['id', 'ruleId'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'ipRuleDetails', uri: '​/ips/:id/rules/:ruleId', uriParams: ['id', 'ruleId'], service: '', type:'', method: 'get', resKey: 'rule' },

  { name: 'listIpRules', uri: '​/ips/:id/rules', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'rule' },

  { name: 'createIpActivity', uri: '​/activity', uriParams: [], service: '', type:'', method: 'get', resKey: 'ip' },

  { name: 'listIpsActivity', uri: '​/activity/list', uriParams: [], service: '', type:'', method: 'get', resKey: 'ips' },
]




