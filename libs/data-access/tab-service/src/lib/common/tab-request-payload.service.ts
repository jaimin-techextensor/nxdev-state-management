import { Injectable } from '@angular/core';
import { TabClasses } from '../util/class';
import { TabEnums } from '../util/enum';

@Injectable()

export class TabRequestPayloadService {

  constructor() { }

  insertPayload(table: string,
    whereClause: TabClasses.APIFilterCriteria,
    value: TabClasses.APIValueSets[]) {
    return this.getPayload(table, whereClause, value, TabEnums.QueryType.Insert);
  }

  deletePayload(tableName: string, whereClause: TabClasses.APIFilterCriteria) {
    return {
      QueryObjectID: tableName,
      QueryType: TabEnums.QueryType.Delete,
      Joins: [],
      WhereClause: whereClause
    };
  }

  updaterequestPayload(tableName: string, whereClause: TabClasses.APIFilterCriteria, value: TabClasses.APIValueSets[]) {
    return this.getPayload(tableName, whereClause, value, TabEnums.QueryType.Update);
  }

  private getPayload(table: string,
    whereClause: TabClasses.APIFilterCriteria,
    value: TabClasses.APIValueSets[],
    queryType: TabEnums.QueryType) {
    return {
      QueryObjectID: table,
      QueryType: queryType,
      Joins: [],
      WhereClause: whereClause,
      Values: value
    };
  }
}
