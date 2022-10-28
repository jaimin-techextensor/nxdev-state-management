import { Injectable } from '@angular/core';
import { TabCommonService } from '../../common/tab-common.service';
import { TabDynamicObjectService } from '../../common/tab-dynamic-object.service';
import { TabRequestPayloadService } from '../../common/tab-request-payload.service';
import { TabWhereClauseService } from '../../query/where-clause/tab-where-clause.service';
import { TabAppFunction } from '../../util/app/app-function';
import { TabClasses } from '../../util/class';
import { TabScreenFunction } from '../../util/entity/screen/screen-function';
import { TabEnums } from '../../util/enum';
import { TabRequestResponseFunction } from '../../util/request-response/request-response-function';

@Injectable()

export class TabInsertService {

  constructor(
    private tabCommonService: TabCommonService,
    private tabDynamicObjectService: TabDynamicObjectService,
    private tabRequestPayloadService: TabRequestPayloadService,
    private tabWhereClauseService: TabWhereClauseService) { }

  insertByScreenId(screenId: string, data: any) {
    const screen: TabClasses.AppScreen = TabScreenFunction.getScreen(screenId);
    const screenDataSource = TabAppFunction.getDataFromDataSourceQueryID(screen.DataSourceQuery);
    return this.insertByObjectId(screenDataSource.ObjectID_Tosave, data);
  }

  insertByObjectId(objectId: string, data: any) {
    let appObject: TabClasses.AppObject = TabAppFunction.getAppObject(objectId);
    return this.prepareInsert(appObject, data);
  }

  prepareInsert(appObject: TabClasses.AppObject, data: any) {
    let crudTableName = appObject.SystemDBTableName;
    TabAppFunction.syncAppObjectFields(data.data, appObject);
    let PrimaryKeyFieldName = TabRequestResponseFunction.getPrimaryKeyField(appObject);
    TabRequestResponseFunction.removePrimaryKey(data.data, PrimaryKeyFieldName);
    let whereClause: TabClasses.APIFilterCriteria = this.tabWhereClauseService.bindWhereClauseForInsert();
    let dataObj: any;
    dataObj = this.tabDynamicObjectService.createDynamicData(data.data);
    dataObj = this.tabDynamicObjectService.removeBlankValue(dataObj);
    const requestPayload = this.tabRequestPayloadService.insertPayload(crudTableName, whereClause, dataObj);
    return this.insert(requestPayload);
  }

  insertByTable(tableName: string, data: any) {
    const crudTableName = tableName;
    let whereClause: TabClasses.APIFilterCriteria = this.tabWhereClauseService.bindWhereClauseForInsert();
    let dataObj: any;
    dataObj = this.tabDynamicObjectService.createDynamicData(data);
    dataObj = this.tabDynamicObjectService.removeBlankValue(dataObj);
    const requestPayload = this.tabRequestPayloadService.insertPayload(crudTableName, whereClause, dataObj);
    return this.insert(requestPayload);
  }

  insert(data: any) {
    return this.tabCommonService.executeQuery(data, TabEnums.QueryType.Insert);
  }
}
