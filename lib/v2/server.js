module.exports =  [

  { name: 'createServer', uri: '​/servers', uriParams: [], service: '', type:'', method: 'post', resKey: 'server' },

  { name: 'updateServer', uri: '​/servers/:id', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'server' },

  { name: 'destroyServer', uri: '​/servers/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'serverDetails', uri: '​/servers/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'server' },

  { name: 'listServers', uri: '​/servers', uriParams: [], service: '', type:'', method: 'get', resKey: 'servers' },

  { name: 'startServer', uri: '​/servers/:id/start', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'server' },

  { name: 'stopServer', uri: '​/servers/:id/stop', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'server' },

  { name: 'rebootServer', uri: '​/servers/:id/reboot', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'server' },

  { name: 'restoreServer', uri: '​/servers/:id/restore', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'server' },

  { name: 'recoverServer', uri: '​/servers/:id/recover', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'server' },

  { name: 'serverEnableSnat', uri: '​/servers/:id/snat', uriParams: ['id'], service: '', type:'', method: 'post', resKey: 'server' },

  { name: 'serverDisableSnat', uri: '​/servers/:id/snat', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: 'server' },

  { name: 'changeServerOffering', uri: '​/servers/:id/offering/:offeringId', uriParams: ['id', 'offeringId'], service: '', type:'', method: 'put', resKey: 'server' },

  { name: 'serverCalculateCru', uri: '​/servers/calculate/cru', uriParams: [], service: '', type:'', method: 'get', resKey: 'server' },

]




