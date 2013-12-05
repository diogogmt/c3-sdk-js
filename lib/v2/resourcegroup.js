module.exports =  [

  { name: 'createGroup', uri: '​/resourcegroups', uriParams: [], service: '', type:'', method: 'post', resKey: 'resourcegroup' },
  { name: 'updateGroup', uri: '​/resourcegroups/:id', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'resourcegroup' },
  { name: 'detailsGroup', uri: '​/resourcegroups/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'resourcegroup' },
  { name: 'deleteGroup', uri: '​/resourcegroups/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: 'resourcegroup' },
  { name: 'createServer', uri: '​/resourcegroups/:id/servers', uriParams: ['id'], service: '', type:'', method: 'post', resKey: 'resourcegroup' },
  { name: 'deleteServer', uri: '​/resourcegroups/:id/servers', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: 'resourcegroup' },
]




