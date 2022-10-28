import { Injectable } from '@angular/core';
import { TabCommonService } from '../../common/tab-common.service';
import { TabRequestPayloadService } from '../../common/tab-request-payload.service';
import { TabWhereClauseService } from '../../query/where-clause/tab-where-clause.service';
import { TabAppFunction } from '../../util/app/app-function';
import { TabClasses } from '../../util/class';
import { TabScreenFunction } from '../../util/entity/screen/screen-function';
import { TabEnums } from '../../util/enum';
import { TabRequestResponseFunction } from '../../util/request-response/request-response-function';

@Injectable({
  'providedIn': 'root'
})

export class TabDeleteService {

  constructor(private tabWhereClauseService: TabWhereClauseService,
    private tabRequestPayloadService: TabRequestPayloadService,
    private tabCommonService: TabCommonService) { }

  deleteRecord(screenId: string, data: any, objectIDToSave: any) {
    let fields;
    let appObject: TabClasses.AppObject = new TabClasses.AppObject();
    let crudTableName;
    if (screenId) {
      const screen: TabClasses.AppScreen = TabScreenFunction.getScreen(screenId);
      const screenDataSource = TabAppFunction.getDataFromDataSourceQueryID(screen.DataSourceQuery);
      fields = screenDataSource.Fields;
      appObject = TabAppFunction.getAppObject(screenDataSource.ObjectID_Tosave);
      crudTableName = appObject.SystemDBTableName;
    }
    if (objectIDToSave) {
      fields = [];
      appObject = TabAppFunction.getAppObject(objectIDToSave);
      appObject.Fields.forEach(element => {
        fields.push({ Field: element })
      });
      crudTableName = appObject.SystemDBTableName;
    }
    let primaryKeyField = TabRequestResponseFunction.getPrimaryKeyField(appObject);
    if (!!appObject) {
      const recordId = TabRequestResponseFunction.getEditRecordId(data.data, primaryKeyField);
      const whereClause = this.tabWhereClauseService.bindWhereClauseForDelete(fields, recordId, primaryKeyField, crudTableName);
      const dataObj = this.tabRequestPayloadService.deletePayload(crudTableName, whereClause);
      return this.delete(dataObj);
    }
    return null;
  }

  //added for deleting dsq filtes
  deleteRecordByTable(tableName: string, primaryKey: string, primaryKeyValue: string) {
    let whereClause: TabClasses.APIFilterCriteria = this.tabWhereClauseService.bindWhereClauseForDeleteByTable(tableName, primaryKey, primaryKeyValue);
    let dataObj = this.tabRequestPayloadService.deletePayload(tableName, whereClause);
    return this.delete(dataObj);
  }

  delete(data: TabClasses.APIDeleteQuery) {
    const deleteConfirmation = this.deleteRecordPopup();
    if (deleteConfirmation) {
      return this.tabCommonService.executeQuery(data, TabEnums.QueryType.Delete);
    } else {
      return null;
    }
  }

  deleteRecordPopup() {
    let text = "You are going to delete selected record. Are you sure want to delete the same?";
    if (confirm(text) == true) {
      return true;
    } else {
      return false;
    }
  }
}
