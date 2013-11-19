module.exports =  [

  { name: 'createSnapshotPolicy', uri: '​/snapshotpolicies', uriParams: [], service: '', type:'', method: 'post', resKey: 'policy' },

  { name: 'destroySnapshotPolicy', uri: '​/snapshotpolicies/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'snapshotPolicyDetails', uri: '​/snapshotpolicies/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'policy' },

  { name: 'listSnapshotPolicies', uri: '​/snapshotpolicies', uriParams: [], service: '', type:'', method: 'get', resKey: 'policies' },

]




