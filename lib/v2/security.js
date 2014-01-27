module.exports =  [

  { name: 'createRole', uri: '​/security/roles', uriParams: [], service: '', type:'', method: 'post', resKey: 'role' },

  { name: 'createModule', uri: '​/security/modules', uriParams: [], service: '', type:'', method: 'post', resKey: 'module' },

  { name: 'updateModule', uri: '​/security/modules/:id', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'module' },

  { name: 'moduleDetails', uri: '​/security/modules/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'modules' },

  { name: 'listModules', uri: '​/security/modules', uriParams: [], service: '', type:'', method: 'get', resKey: 'modules' },

  { name: 'listRoles', uri: '​/security/roles', uriParams: [], service: '', type:'', method: 'get', resKey: 'roles' },

]


