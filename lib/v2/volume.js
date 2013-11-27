module.exports =  [

  { name: 'createVolume', uri: '​/volumes', uriParams: [], service: '', type:'', method: 'post', resKey: 'volume' },

  { name: 'uploadVolume', uri: '​/volumes/upload', uriParams: [], service: '', type:'', method: 'post', resKey: 'volume' },

  { name: 'destroyVolume', uri: '​/volumes/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: 'volume' },

  { name: 'attachVolume', uri: '​/volumes/:id/attach', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'volume' },

  { name: 'detachVolume', uri: '​/volumes/:id/detach', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'volume' },

  { name: 'volumeDetails', uri: '​/volumes/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'volume' },

  { name: 'listVolumes', uri: '​/volumes', uriParams: [], service: '', type:'', method: 'get', resKey: 'volumes' },

  { name: 'calculateVolumeCru', uri: '​/volumes/calculate/cru', uriParams: [], service: '', type:'', method: 'post', resKey: 'volume' },

  { name: 'createVolumeBackup', uri: '​/volumes/:volumeId/backups', uriParams: ['volumeId'], service: '', type:'', method: 'post', resKey: 'backup' },

  { name: 'destroyVolumeBackup', uri: '​/volumes/:volumeId/backups/:backupId', uriParams: ['volumeId', 'backupId'], service: '', type:'', method: 'delete', resKey: 'backup' },

  { name: 'volumeBackupDetails', uri: '​/volumes/:volumeId/backups/:backupId', uriParams: ['volumeId', 'backupId'], service: '', type:'', method: 'get', resKey: 'backup' },

  { name: 'listVolumeBackups', uri: '​/volumes/:volumeId/backups', uriParams: ['volumeId'], service: '', type:'', method: 'get', resKey: 'backups' },

]




