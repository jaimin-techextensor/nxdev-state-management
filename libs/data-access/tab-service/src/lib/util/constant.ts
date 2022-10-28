export namespace TabConstant {
  export const Common = {
    applicationCode: 'DBSAAS',
    tabJson: null
  }

  export const API = {
    endpoint: 'http://161.97.104.204:8018/api/v1/',
    insert: 'CRUD/Insert',
    update: 'CRUD/Update',
    delete: 'CRUD/Delete',
    select: 'CRUD/Select',
    getDSQ: 'CRUD/DSQ',
    getScreen: '',
    getListFromDsq: 'List/Get?dataSourceQueryId=',
    buildApp: 'Application/BuildApp',
    publishApp: 'Application/PublishApp',
    getSchema: 'Application/GetSchemaFile',
    log: 'Application/Log',
    login: 'identity/login',
    pluginUpload: 'Plugins/Upload',
    getFile: 'Plugins/GetFileById',
    getAllPluginByType: 'Plugins/GetAll',
    templateParse: 'Template/Parse'
  }

  export const Storage = {
    formJson: 'FormJson',
    token: 'token',
    screenId: 'screenId',
    editScreenQueryParam: 'editScreenQueryParam',
    layoutScreenId: 'layoutScreenId',
    tabScreen: 'tabScreen'
  }
}
