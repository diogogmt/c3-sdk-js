module.exports =  [

  { name: 'createSecurityZone', uri: '​/securityzones', uriParams: [], service: '', type:'', method: 'post', resKey: 'securityZone' },

  { name: 'updateSecurityZone', uri: '​/securityzones/:id', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'securityZone' },

  { name: 'destroySecurityZone', uri: '​/securityzones/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'securityZoneDetails', uri: '​/securityzones/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'securityZone' },

  { name: 'listSecurityZones', uri: '​/securityzones', uriParams: [], service: '', type:'', method: 'get', resKey: 'securityZones' },

  { name: 'createSecurityZoneRule', uri: '​/securityzones/:id/rules', uriParams: ['id'], service: '', type:'', method: 'post', resKey: 'rule' },

  { name: 'destroySecurityZoneRule', uri: '​/securityzones/:id/rules/:ruleId', uriParams: ['id', 'ruleId'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'securityZoneRuleDetails', uri: '​/securityzones/:id/rules/:ruleId', uriParams: ['id', 'ruleId'], service: '', type:'', method: 'get', resKey: 'rule' },

  { name: 'listSecurityZoneRules', uri: '​/securityzones/:id/rules', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'rules' },

]




