module.exports =  [

  { name: 'createTemplate', uri: '​/templates', uriParams: [], service: '', type:'', method: 'post', resKey: 'template' },

  { name: 'updateTemplate', uri: '​/templates/:id', uriParams: ['id'], service: '', type:'', method: 'put', resKey: 'template' },

  { name: 'destroyTemplate', uri: '​/templates/:id', uriParams: ['id'], service: '', type:'', method: 'delete', resKey: '' },

  { name: 'templateDetails', uri: '​/templates/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'template' },

  { name: 'listTemplates', uri: '​/templates', uriParams: [], service: '', type:'', method: 'get', resKey: 'templates' },

  { name: 'calculateTemplateCru', uri: '​/templates/calculate/cru', uriParams: [], service: '', type:'', method: 'post', resKey: 'template' },

  { name: 'rawTemplateDetails', uri: '​/templates/raw/:id', uriParams: ['id'], service: '', type:'', method: 'get', resKey: 'template' },

  { name: 'listRawTemplates', uri: '​/templates/raw', uriParams: [], service: '', type:'', method: 'get', resKey: 'templates' },

]




