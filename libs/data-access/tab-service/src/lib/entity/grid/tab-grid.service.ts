import { Injectable } from '@angular/core';
import { each, find, orderBy } from 'lodash';
import { TabCommonFunction } from '../../util/common/tab-common-function';
import { TabGridFunction } from '../../util/entity/grid/grid-function';
import { TabGridClasses } from '../../util/tab-grid-class';

@Injectable()

export class TabGridService {

  constructor() { }

  gridSettings(DSQ: any, detailsDataAppObject: any, isShowLookupFields: any) {
    let { columnData, dataFields }: {
      columnData: TabGridClasses.ColumnDetailModel[];
      dataFields: TabGridClasses.DataFieldsModel[];
    } = this.bindDuplicateGridProperties(DSQ);
    if (isShowLookupFields) {
      this.manageListAndDefaultFields(columnData, detailsDataAppObject);
    }
    return { columnData, dataFields }
  }

  bindDuplicateGridProperties(matchedDataSourceQuery: any) {
    let dataFields: Array<TabGridClasses.DataFieldsModel> = [];
    let fieldsDatasourceQuerywise = matchedDataSourceQuery.Fields;
    let fields = this.getDataFields(fieldsDatasourceQuerywise, dataFields);
    let columnData: Array<TabGridClasses.ColumnDetailModel> = this.getColumnData(fields);
    return { columnData, dataFields };
  }

  manageListAndDefaultFields(columnData: any, detailsDataAppObject: any) {
    if (columnData.length != detailsDataAppObject.length) {
      let detailsFields = this.getColumnData(detailsDataAppObject.Fields);
      detailsFields.forEach((df: any) => {
        let sameField = find(columnData, (a: any) => a.appFieldId == df.appFieldId);
        if (!sameField) {
          df.hidden = true;
          columnData.push(df);
        }
      });
    }
    return columnData;
  }

  private getDataFields(fieldsDatasourceQuerywise: any, dataFields: TabGridClasses.DataFieldsModel[]) {
    let fields = orderBy(fieldsDatasourceQuerywise, (field: any) => {
      if (field.SeqNo === 0) {
        Object.assign({}, field, { SeqNo: null });
      }
      return field.SeqNo;
    });
    each(fields, (field: any) => {
      let isLookup = field.Field.LookupDetails !== null ? true : false;
      dataFields.push({
        name: field.Field.FieldName,
        type: TabCommonFunction.getFieldsType(field.Field.FieldType.DataType, isLookup),
      });
    });
    return fields;
  }

  getColumnData(fields: any) {
    let columnData: Array<TabGridClasses.ColumnDetailModel> = [];
    each(fields, (field: any) => {
      let columnD: TabGridClasses.ColumnDetailModel = {
        text: field.Field.DisplayName,
        dataField: field.Field.FieldName,
        columntype: TabGridFunction.getColumnType(field.Field.FieldType.DataType),
        appFieldId: field.Field.ID,
        seq: field.SeqNo,
        isPrimaryKey: field.Field.IsPrimaryKey,
        SystemDBFieldName: field.Field.SystemDBFieldName
      }
      if (field.FieldType == 2) {
        columnD.dataField = field.LookupDetails?.replaceAll('.', '_');
      }

      if (!!field.Field_GridAttributes) {
        let attr = JSON.parse(field.Field_GridAttributes);
        Object.assign(columnD, attr)
        if (!!attr.cellsrenderer && attr.cellsrenderer !== '') {
          columnD.cellsrenderer = this.getRendererValue(attr.cellsrenderer);
        }
      }
      if (field.Field.hasOwnProperty('LookUpDetails')) {
        columnD.LookUpDetails = field.Field.LookUpDetails;
        columnD.dropDownLookup = field.Field.dropDownData;
      }
      columnData.push(columnD);
    });
    return columnData;
  }

  getRendererValue(key: string) {
    switch (key) {
      case 'LINKRENDERER':
        return this.rowLinkRenderer
      default:
        console.log('No such day exists!');
        break;
    }
    return null;
  }

  rowLinkRenderer = (row: number, column: any, value: string): string => {
    return `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a data-row='` + row + `' style='cursor:pointer;' column-name='` + column + `' action='redirect' class='Link_click' >` + value + '</a>';
  }
}
