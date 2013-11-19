module.exports =  [

  { name: 'createLoadbalancer', uri: '​/loadbalancers', uriParams: [], service: '', type:'', method: 'post', resKey: 'loadbalancer' },

  { name: 'updateLoadbalancer', uri: '​/loadbalancers/:id', uriParams: [], service: '', type:'', method: 'put', resKey: 'loadbalancer' },

  { name: 'destroyLoadbalancer', uri: '​/loadbalancers/:id', uriParams: [], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'loadbalancerDetails', uri: '​/loadbalancers/:id', uriParams: [], service: '', type:'', method: 'get', resKey: 'loadbalancer' },

  { name: 'listLoadbalancers', uri: '​/loadbalancers', uriParams: [], service: '', type:'', method: 'get', resKey: 'loadbalancers' },

  { name: 'creatLoadbalancerRule', uri: '​/loadbalancers/:id/rules', uriParams: [], service: '', type:'', method: 'post', resKey: 'rule' },

  { name: 'destroyLoadbalancerRule', uri: '​/loadbalancers/:id/rules/:ruleId', uriParams: [], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'loadbalancerRuleDetails', uri: '​/loadbalancers/:id/rules/:ruleId', uriParams: [], service: '', type:'', method: 'get', resKey: 'rule' },

  { name: 'listLoadbalancerRules', uri: '​/loadbalancers/:id/rules', uriParams: [], service: '', type:'', method: 'get', resKey: 'rules' },

  { name: 'addServerToLoadbalancer', uri: '​/loadbalancers/:id/servers/:serverId', uriParams: [], service: '', type:'', method: 'post', resKey: '' },

  { name: 'removeServerFromLoadbalancer', uri: '​/loadbalancers/:id/servers/:serverId', uriParams: [], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'listLoadbalancedServers', uri: '​/loadbalancers/:id/servers', uriParams: [], service: '', type:'', method: 'get', resKey: 'servers' },

]




