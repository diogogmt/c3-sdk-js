module.exports =  [

  { name: 'createVpc', uri: '​/vpcs', uriParams: [], service: '', type:'', method: 'post', resKey: 'vpc' },

  { name: 'updateVpc', uri: '​/vpcs/:id', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'vpc' },

  { name: 'destroyVpc', uri: '​/vpcs/:id', uriParams: ['id'], service: '', type:'', method: 'del', resKey: 'vpc' },

  { name: 'vpcDetails', uri: '​/vpcs/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'vpc' },

  { name: 'listVpcs', uri: '​/vpcs', uriParams: [], service: '', type:'', method: 'get', resKey: 'vpcs' },

]




