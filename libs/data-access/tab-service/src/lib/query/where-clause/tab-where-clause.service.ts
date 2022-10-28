import { Injectable } from '@angular/core';
import { find } from 'lodash';
import { TabClasses } from '../../util/class';
import { TabEnums } from '../../util/enum';

@Injectable()

export class TabWhereClauseService {

  constructor() { }

  bindWhereClauseForDelete(fields: any, value: any, fieldName: string, crudTableName: string) {
    return this.bindWhereClause(fields, value, fieldName, crudTableName);
  }

  bindWhereClauseForInsert() {
    return this.bindWhereClauseEmpty();
  }

  bindWhereClauseEmpty() {
    let whereClause = new TabClasses.APIFilterCriteria();
    whereClause.FilterLogic = '1';
    whereClause.Filters = [];
    return whereClause;
  }

  private bindWhereClause(fields: any, value: any, fieldName: string, crudTableName: string) {
    let field;
    if (fieldName) {
      field = find(fields, (f: any) => f.Field.FieldName == fieldName);
    } else {
      field = find(fields, (f: any) => f.Field.FieldName == 'Id' || f.FieldName == 'ID');
    }
    const filter: any = {
      ConjuctionClause: TabEnums.ConjuctionClause.AND,
      FieldID: crudTableName + '.' + field.Field.SystemDBFieldName,
      RelationalOperator: TabEnums.RelationalOperator.EqualTo,
      ValueType: TabEnums.FilterValueType.Literal,
      value: value,
      Sequence: 0,
      GroupID: 0
    };
    const whereClause = new TabClasses.APIFilterCriteria();
    whereClause.Filters = [];
    whereClause.Filters.push(filter);
    whereClause.FilterLogic = '1';
    return whereClause;
  }

  bindWhereClauseForUpdate(tableName: string, queryFieldsArray: any) {
    let whereClause = new TabClasses.APIFilterCriteria();
    whereClause.Filters = [];
    if (queryFieldsArray.length) {
      queryFieldsArray.forEach((element: any) => {
        let filter: any = {
          ConjuctionClause: TabEnums.ConjuctionClause.AND,
          FieldID: tableName + '.' + element.FieldName,
          RelationalOperator: TabEnums.RelationalOperator.EqualTo,
          ValueType: TabEnums.FilterValueType.Literal,
          value: element.FieldValue,
          Sequence: 0,
          GroupID: 0
        };
        whereClause.Filters.push(filter);
      });
    }
    whereClause.FilterLogic = '1';
    return whereClause;
  }

  bindWhereClauseForDeleteByTable(tableName: string, primaryKey: string, primaryKeyValue: string) {
    let whereClause = new TabClasses.APIFilterCriteria();
    whereClause.Filters = [];
    let filter: any = {
      ConjuctionClause: TabEnums.ConjuctionClause.AND,
      FieldID: tableName + "." + primaryKey,
      RelationalOperator: TabEnums.RelationalOperator.EqualTo,
      ValueType: TabEnums.FilterValueType.Literal,
      value: primaryKeyValue,
      Sequence: 0,
      GroupID: 0
    };
    whereClause.Filters.push(filter);
    whereClause.FilterLogic = "1";
    return whereClause;
  }

  bindWhereClauseForUpdateGrid(Fields: any, value: any, fieldName: string, crudTableName: string) {
    return this.bindWhereClause(Fields, value, fieldName, crudTableName);
  }
}
