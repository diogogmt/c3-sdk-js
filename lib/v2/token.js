module.exports =  [

    // Identity

    // Token
    { name: 'authenticate', uri: '​/tokens', uriParams: [], service: '', type:'', method: 'POST' },

    { name: 'listTokens', uri: '​/tokens/:userId', uriParams: ['userId'], service: '', type:'', method: 'GET' },

    // Tenant
    { name: 'createTenant', uri: '​/tenants', uriParams: [], service: 'identity', type:'adminURL', method: 'POST', resKey: 'tenant' },

    { name: 'listTenant', uri: '​/tenants', uriParams: [], service: 'identity', type:'adminURL', method: 'GET', resKey: 'tenants' },
    

    // User
    { name: 'createUser', uri: '​/users', uriParams: [], service: 'identity', type:'adminURL', method: 'POST', resKey: 'user' },

    { name: 'listUsers', uri: '​/users', uriParams: [], service: 'identity', type:'adminURL', method: 'GET', resKey: 'users' },

    { name: 'addUserToRole', uri: '​/tenants/:tenantid/users/:userid/roles/OS-KSADM/:roleid', uriParams: ['tenantid', 'userid', 'roleid'], service: 'identity', type:'adminURL', method: 'PUT', resKey: 'tenant' },

  ]




