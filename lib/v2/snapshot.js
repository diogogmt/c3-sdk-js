module.exports =  [

  { name: 'createSnapshot', uri: '​/snapshots', uriParams: [], service: '', type:'', method: 'post', resKey: 'snapshot' },

  { name: 'destroySnapshot', uri: '​/snapshots/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'snapshotDetails', uri: '​/snapshots/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'snapshot' },

  { name: 'listSnapshots', uri: '​/snapshots', uriParams: [], service: '', type:'', method: 'get', resKey: 'snapshots' },

]




