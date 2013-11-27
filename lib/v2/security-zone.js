module.exports =  [

  { name: 'createSecurityZone', uri: '​/securityzones', uriParams: [], service: '', type:'', method: 'post', resKey: 'securityZone' },

  { name: 'updateSecurityZone', uri: '​/securityzones/:id', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'securityZone' },

  { name: 'destroySecurityZone', uri: '​/securityzones/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: 'securityZone' },

  { name: 'securityZoneDetails', uri: '​/securityzones/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'securityZone' },

  { name: 'listSecurityZones', uri: '​/securityzones', uriParams: [], service: '', type:'', method: 'get', resKey: 'securityZones' },

  { name: 'createSecurityZoneRule', uri: '​/securityzones/:securityZoneId/rules', uriParams: ['securityZoneId'], service: '', type:'', method: 'post', resKey: 'rule' },

  { name: 'destroySecurityZoneRule', uri: '​/securityzones/:securityZoneId/rules/:ruleId', uriParams: ['securityZoneId', 'ruleId'], service: '', type:'', method: 'delete', resKey: 'rule' },

  { name: 'securityZoneRuleDetails', uri: '​/securityzones/:securityZoneId/rules/:ruleId', uriParams: ['securityZoneId', 'ruleId'], service: '', type:'', method: 'get', resKey: 'rule' },

  { name: 'listSecurityZoneRules', uri: '​/securityzones/:securityZoneId/rules', uriParams: ['securityZoneId'], service: '', type:'', method: 'get', resKey: 'rules' },

]




