module.exports =  [

  { name: 'createVpn', uri: '​/vpns', uriParams: [], service: '', type:'', method: 'post', resKey: 'vpn' },

  { name: 'resetVpn', uri: '​/vpns/:id/reset', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'vpn' },

  { name: 'destroyVpn', uri: '​/vpns/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'vpnDetails', uri: '​/vpns/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'vpn' },

  { name: 'listVpns', uri: '​/vpns', uriParams: [], service: '', type:'', method: 'get', resKey: 'vpns' },

]




