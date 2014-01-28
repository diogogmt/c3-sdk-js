module.exports =  [

  // Modules
  { name: 'createModule', uri: '​/security/modules', uriParams: [], service: '', type:'', method: 'post', resKey: 'module' },

  { name: 'updateModule', uri: '​/security/modules/:id', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'module' },

  { name: 'moduleDetails', uri: '​/security/modules/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'modules' },

  { name: 'listModules', uri: '​/security/modules', uriParams: [], service: '', type:'', method: 'get', resKey: 'modules' },

  // Roles
  { name: 'createRole', uri: '​/security/roles', uriParams: [], service: '', type:'', method: 'post', resKey: 'role' },

  { name: 'addModuleToRole', uri: '​/security/roles/:roleId/modules', uriParams: ['roleId'], service: '', type:'', method: 'post', resKey: 'role' },

  { name: 'removeModuleFromRole', uri: '​/security/roles/:roleId/modules', uriParams: ['roleId'], service: '', type:'', method: 'delete', resKey: 'role' },

  { name: 'listRoles', uri: '​/security/roles', uriParams: [], service: '', type:'', method: 'get', resKey: 'roles' },

]


