import { Injectable } from '@angular/core';
import { TabWhereClauseService } from '../../query/where-clause/tab-where-clause.service';
import { TabAppFunction } from '../../util/app/app-function';
import { TabClasses } from '../../util/class';
import { TabScreenFunction } from '../../util/entity/screen/screen-function';
import { TabEnums } from '../../util/enum';
import { TabRequestResponseFunction } from '../../util/request-response/request-response-function';
import { TabCommonService } from './../../common/tab-common.service';
import { TabDynamicObjectService } from './../../common/tab-dynamic-object.service';
import { TabRequestPayloadService } from './../../common/tab-request-payload.service';

@Injectable()

export class TabUpdateService {

  constructor(private tabWhereClauseService: TabWhereClauseService,
    private tabDynamicObjectService: TabDynamicObjectService,
    private tabRequestPayloadService: TabRequestPayloadService,
    private tabCommonService: TabCommonService) { }

  updateUsingDSQ(dsqId: string, data: any, tableName: string, queryFieldsArray?: any) {
    let appObject: TabClasses.AppObject = TabAppFunction.getDataFromDataSourceQueryID(dsqId);
    if (!!appObject) {
      if (!!data.data) {
        let whereClause: TabClasses.APIFilterCriteria = this.tabWhereClauseService.bindWhereClauseForUpdate(tableName, queryFieldsArray);
        let dataObj: any = [];
        dataObj = this.tabDynamicObjectService.createDynamicData(data.data);
        let requestPayload = this.tabRequestPayloadService.updaterequestPayload(tableName, whereClause, dataObj);
        return this.update(requestPayload);
      }
    }
    return null;
  }

  updateUsingScreenId(screenId: string, data: any, objectIdToSave?: string) {
    let fields;
    let appObject: TabClasses.AppObject = new TabClasses.AppObject();
    let crudTableName;
    if (screenId) {
      let screen: TabClasses.AppScreen = TabScreenFunction.getScreen(screenId);
      let screenDataSource = TabAppFunction.getDataFromDataSourceQueryID(screen.DataSourceQuery);
      fields = screenDataSource.Fields;
      appObject = TabAppFunction.getAppObject(screenDataSource.ObjectID_Tosave);
      crudTableName = appObject.SystemDBTableName;
      TabAppFunction.syncAppObjectFields(data.data, appObject);
    }
    if (objectIdToSave) {
      fields = [];
      appObject = TabAppFunction.getAppObject(objectIdToSave);
      appObject.Fields.forEach(element => {
        fields.push({ Field: element })
      });
      crudTableName = appObject.SystemDBTableName;
      TabAppFunction.syncAppObjectFields(data.data, appObject);
    }

    let primaryKeyField = TabRequestResponseFunction.getPrimaryKeyField(appObject);
    if (!!appObject) {
      if (!!data.data) {
        let recordId = TabRequestResponseFunction.getEditRecordId(data.data, primaryKeyField);
        data['recordId'] = recordId;
        TabRequestResponseFunction.removePrimaryKey(data.data, primaryKeyField);
        let whereClause: TabClasses.APIFilterCriteria = this.tabWhereClauseService.bindWhereClauseForUpdateGrid(fields, data.recordId, primaryKeyField, crudTableName);
        let dataObj: any;
        dataObj = this.tabDynamicObjectService.createDynamicData(data.data);
        dataObj = this.tabDynamicObjectService.removeBlankValue(dataObj);
        let requestPayload = this.tabRequestPayloadService.updaterequestPayload(crudTableName, whereClause, dataObj);
        return this.update(requestPayload);
      }
    }
    return null;
  }

  //need to make it generic, as of now added for screen grid state persistance data save.
  updateScreen(screenId: string, screenData: any) {
    let screen: TabClasses.AppScreen = TabScreenFunction.getScreen(screenId);
    if (screen) {
      Object.assign({}, screen, { Container: screenData.Container });
      let queryFilters: TabClasses.UpdateQueryParameter[] = [];
      queryFilters.push({ FieldName: 'ID', FieldValue: screenId })
      const whereClause = this.tabWhereClauseService.bindWhereClauseForUpdate('TABMD_AppScreen', queryFilters);
      let dataObj: any;
      dataObj = this.tabDynamicObjectService.createDynamicData(screenData);
      dataObj = this.tabDynamicObjectService.removeBlankValue(dataObj);
      let requestPayload = this.tabRequestPayloadService.updaterequestPayload('TABMD_AppScreen', whereClause, dataObj);
      return this.update(requestPayload);
    }
    return null;
  }

  update(data: TabClasses.APIUpdateQuery) {
    return this.tabCommonService.executeQuery(data, TabEnums.QueryType.Update);
  }
}
