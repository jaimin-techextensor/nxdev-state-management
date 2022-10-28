import { Injectable } from '@angular/core';
import { TabClasses } from '../../util/class';
import { TabInsertService } from '../insert/tab-insert.service';
import { TabDeleteService } from './../delete/tab-delete.service';

@Injectable()

export class TabUpdateStaticTableService {

  constructor(private tabDeleteService: TabDeleteService, private tabInsertService: TabInsertService) { }

  async updateDSQSortTable(dsqId: string, sortedColumnArray: any) {
    await this.deleteIDWiseTableRecord('TABMD_DataSourceQueries_Sort', 'DataSourceQueryID', dsqId);
    sortedColumnArray.forEach((element: any) => {
      this.insertToDSQSortTable(dsqId, element);
    });
  }

  async updateDSQFilterTable(dsqId: string, filterColumnArray: any) {
    await this.deleteIDWiseTableRecord('TABMD_DataSourceQueries_Filters', 'DataSourceQueryID', dsqId);
    filterColumnArray.forEach((element: any) => {
      this.insertToDSQFilterTable(dsqId, element);
    });
  }

  updateDSQFieldsTable(dsqId: string, insertFieldsArray: any, deleteFieldsArray: any) {
    if (deleteFieldsArray.length) {
      deleteFieldsArray.forEach((element: any) => {
        this.deleteDSQFieldsTable(dsqId, element);
      });
    }
    if (insertFieldsArray.length) {
      insertFieldsArray.forEach((element: any) => {
        this.insertDSQFieldsTable(dsqId, element);
      });
    }
  }

  insertDSQFieldsTable(dsqId: string, element: any) {
    let insertQueryValue = new TabClasses.APIInsertQuery();
    insertQueryValue.QueryObjectID = 'TABMD_DataSourceQueries_Fields';
    insertQueryValue.QueryType = 1;
    insertQueryValue.Joins = [];
    insertQueryValue.WhereClause.FilterLogic = '';
    insertQueryValue.WhereClause.Filters = [];
    let Values = [
      { 'AppFieldID': 'DataSourceQueryId', 'Value': dsqId },
      { 'AppFieldID': 'AppFieldID', 'Value': element.id },
      { 'AppFieldID': 'Field_GridAttribute', 'Value': null },
      { 'AppFieldID': 'SequenceNo', 'Value': 0 },
      { 'AppFieldID': 'LookUpDetail', 'Value': element.hasOwnProperty('fieldType') ? element.field : null },
      { 'AppFieldID': 'FieldType', 'Value': element.hasOwnProperty('fieldType') ? element.fieldType : 1 },
    ];
    insertQueryValue.Values = Values;
    this.tabInsertService.insert(insertQueryValue)?.subscribe((res: any) => {
      return res;
    });
  }

  deleteDSQFieldsTable(dsqId: string, element: any) {
    let deleteQueryValue = new TabClasses.APIDeleteQuery();
    deleteQueryValue.QueryObjectID = 'TABMD_DataSourceQueries_Fields';
    deleteQueryValue.QueryType = 3;
    deleteQueryValue.Joins = [];
    deleteQueryValue.WhereClause.FilterLogic = '1';
    let deleteFilter = [];
    deleteFilter.push({
      'ConjuctionClause': 1,
      'FieldID': 'TABMD_DataSourceQueries_Fields' + '.' + 'DataSourceQueryID',
      'RelationalOperator': 3,
      'ValueType': 1,
      'value': dsqId,
      'Sequence': 0,
      'GroupID': 0
    });
    deleteFilter.push({
      'ConjuctionClause': 1,
      'FieldID': 'TABMD_DataSourceQueries_Fields' + '.' + 'AppFieldID',
      'RelationalOperator': 3,
      'ValueType': 1,
      'value': element.ID,
      'Sequence': 0,
      'GroupID': 0
    });
    deleteQueryValue.WhereClause.Filters = deleteFilter;
    this.tabDeleteService.delete(deleteQueryValue)?.subscribe((res: any) => {
      return res;
    });
  }

  insertToDSQFilterTable(dsqId: string, element: any) {
    let insertQueryValue = new TabClasses.APIInsertQuery();
    insertQueryValue.QueryObjectID = 'TABMD_DataSourceQueries_Filters';
    insertQueryValue.QueryType = 1;
    insertQueryValue.Joins = [];
    insertQueryValue.WhereClause.FilterLogic = '';
    insertQueryValue.WhereClause.Filters = [];
    let Values = [
      { 'AppFieldID': 'DataSourceQueryId', 'Value': dsqId },
      { 'AppFieldID': 'ConjuctionClause', 'Value': element.ConjuctionClause },
      { 'AppFieldID': 'FieldID', 'Value': element.id },
      { 'AppFieldID': 'RelationalOperator', 'Value': element.RelationalOperator },
      { 'AppFieldID': 'FilterValueType', 'Value': element.ValueType },
      { 'AppFieldID': 'value', 'Value': element.Value },
      { 'AppFieldID': 'Sequence', 'Value': 1 },
      { 'AppFieldID': 'GroupID', 'Value': 1 },
    ];
    insertQueryValue.Values = Values;
    this.tabInsertService.insert(insertQueryValue)?.subscribe((res: any) => {
      return res;
    });
  }

  deleteIDWiseTableRecord(tableName: string, fieldName: string, fieldValue: any) {
    return new Promise((resolve) => {
      let deleteQueryValue = new TabClasses.APIDeleteQuery();
      deleteQueryValue.QueryObjectID = tableName;
      deleteQueryValue.QueryType = 3;
      deleteQueryValue.Joins = [];
      deleteQueryValue.WhereClause.FilterLogic = '1';
      let deleteFilter = [];
      deleteFilter.push({
        'ConjuctionClause': 1,
        'FieldID': tableName + '.' + fieldName,
        'RelationalOperator': 3,
        'ValueType': 1,
        'value': fieldValue,
        'Sequence': 0,
        'GroupID': 0
      });
      deleteQueryValue.WhereClause.Filters = deleteFilter;
      this.tabDeleteService.delete(deleteQueryValue)?.subscribe((res: any) => {
        resolve(res);
      });
    })
  }

  insertToDSQSortTable(dsqId: string, element: any) {
    let insertQueryValue = new TabClasses.APIInsertQuery();
    insertQueryValue.QueryObjectID = 'TABMD_DataSourceQueries_Sort';
    insertQueryValue.QueryType = 1;
    insertQueryValue.Joins = [];
    insertQueryValue.WhereClause.FilterLogic = '';
    insertQueryValue.WhereClause.Filters = [];
    let Values = [
      { 'AppFieldID': 'DataSourceQueryId', 'Value': dsqId },
      { 'AppFieldID': 'AppFieldI', 'Value': element.FieldID },
      { 'AppFieldID': 'SortSequence', 'Value': element.SortSequence == 'Asceding' ? 1 : 2 },
      { 'AppFieldID': 'Sequence', 'Value': 1 },
    ];
    insertQueryValue.Values = Values;
    this.tabInsertService.insert(insertQueryValue)?.subscribe((res: any) => {
      return res;
    });
  }
}
