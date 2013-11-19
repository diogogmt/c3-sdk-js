module.exports =  [

  { name: 'createVolume', uri: '​/volumes', uriParams: [], service: '', type:'', method: 'post', resKey: 'volume' },

  { name: 'uploadVolume', uri: '​/volumes/upload', uriParams: [], service: '', type:'', method: 'post', resKey: 'volume' },

  { name: 'destroyVolume', uri: '​/volumes/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'attachVolume', uri: '​/volumes/:id/attach', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'volume' },

  { name: 'detachVolume', uri: '​/volumes/:id/detach', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'volume' },

  { name: 'volumeDetails', uri: '​/volumes/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'volume' },

  { name: 'listVolumes', uri: '​/volumes', uriParams: [], service: '', type:'', method: 'get', resKey: 'volumes' },

]




