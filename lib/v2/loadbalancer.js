module.exports =  [

  { name: 'createLoadbalancer', uri: '​/loadbalancers', uriParams: [], service: '', type:'', method: 'post', resKey: 'loadbalancer' },

  { name: 'updateLoadbalancer', uri: '​/loadbalancers/:id', uriParams: [], service: '', type:'', method: 'put', resKey: 'loadbalancer' },

  { name: 'destroyLoadbalancer', uri: '​/loadbalancers/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: 'loadbalancer' },

  { name: 'loadbalancerDetails', uri: '​/loadbalancers/:id', uriParams: [], service: '', type:'', method: 'get', resKey: 'loadbalancer' },

  { name: 'listLoadbalancers', uri: '​/loadbalancers', uriParams: [], service: '', type:'', method: 'get', resKey: 'loadbalancers' },

  { name: 'creatLoadbalancerRule', uri: '​/loadbalancers/:loadbalancerId/rules', uriParams: ['loadbalancerId'], service: '', type:'', method: 'post', resKey: 'rule' },

  { name: 'destroyLoadbalancerRule', uri: '​/loadbalancers/:loadbalancerId/rules/:ruleId', uriParams: ['loadbalancerId'], service: '', type:'', method: 'delete', resKey: 'rule' },

  { name: 'loadbalancerRuleDetails', uri: '​/loadbalancers/:loadbalancerId/rules/:ruleId', uriParams: ['loadbalancerId'], service: '', type:'', method: 'get', resKey: 'rule' },

  { name: 'listLoadbalancerRules', uri: '​/loadbalancers/:loadbalancerId/rules', uriParams: ['loadbalancerId'], service: '', type:'', method: 'get', resKey: 'rules' },

  { name: 'addServerToLoadbalancer', uri: '​/loadbalancers/:loadbalancerId/servers/:serverId', uriParams: ['loadbalancerId'], service: '', type:'', method: 'post', resKey: 'server' },

  { name: 'removeServerFromLoadbalancer', uri: '​/loadbalancers/:loadbalancerId/servers/:serverId', uriParams: ['loadbalancerId'], service: '', type:'', method: 'delete', resKey: 'server' },

  { name: 'listLoadbalancedServers', uri: '​/loadbalancers/:loadbalancerId/servers', uriParams: ['loadbalancerId'], service: '', type:'', method: 'get', resKey: 'servers' },

]




