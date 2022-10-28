import { HttpHeaders } from '@angular/common/http';
import { each } from 'lodash';
import { TabAppFunction } from '../app/app-function';
import { TabClasses } from '../class';
import { TabCommonFunction } from '../common/tab-common-function';
import { TabConstant } from '../constant';

export namespace TabRequestResponseFunction {

    export function deleteKeyFromResponse(response: any, key: string) {
        delete response[key];
        return response;
    }

    export function removePrimaryKey(response: any, field: string) {
        if (field)
            deleteKeyFromResponse(response, field)
        else {
            if (response.hasOwnProperty('ID'))
                deleteKeyFromResponse(response, 'ID')
            else if (response.hasOwnProperty('Id')) {
                deleteKeyFromResponse(response, 'Id')
            }
        }
        return response;
    }

    export function getHeaders() {
        var token = sessionStorage.getItem(TabConstant.Storage.token)
        if (token) {
            return new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token,
                ApplicationCode: TabConstant.Common.applicationCode
            });
        }
        return null;
    }

    export function getPrimaryKeyField(appObject: TabClasses.AppObject) {
        let fieldName = ''
        if (appObject.Fields.length) {
            let fields = appObject.Fields;
            each(fields, (f: any) => {
                if (f.hasOwnProperty('IsPrimaryKey') && f.IsPrimaryKey)
                    fieldName = f.FieldName;
            });
        }
        return fieldName;
    }

    export function getEditRecordId(response: any, fieldName: any) {
        let recordId = null;
        if (fieldName) {
            if (response.hasOwnProperty(fieldName))
                recordId = response[fieldName];
        } else {
            if (response.hasOwnProperty('Id'))
                recordId = response.Id;
            else if (response.hasOwnProperty('ID'))
                recordId = response.ID;
        }
        return recordId;
    }

    export function generateFieldsSchema(fields: TabClasses.AppFields) {
        let schema = {};
        if (fields.hasOwnProperty('LookUpDetails')) {
            let selectedAppObject: TabClasses.AppObject = TabAppFunction.getAppObject(fields.LookUpDetails.LookupObject);
            let dsqID = TabAppFunction.getDsqIdfromSelectedAppObjectDSQArray(selectedAppObject?.DataSourceQueries, fields.LookUpDetails.LookupObject, 'List')
            schema = {
                label: fields.DisplayName,
                type: 'select',
                key: fields.SystemDBFieldName,
                input: true,
                dataSrc: 'url',
                valueProperty: fields.LookUpDetails.LookupField,
                template: '<span>{{ ' + 'item.' + fields.LookUpDetails.DisplayField + ' }}</span>',
                selectValues: 'Result',
                data: {
                    url: TabConstant.API.getListFromDsq + dsqID
                },
            }
        } else {
            schema = {
                label: fields.DisplayName,
                type: TabCommonFunction.getFormBuilderType(fields.FieldType.DataType),
                key: fields.SystemDBFieldName,
                input: true
            }
        }
        return schema;
    }

    export function getFormDataHeaders() {
        var token = sessionStorage.getItem(TabConstant.Storage.token)
        if (token) {
            return new HttpHeaders({
                'Accept': '*/*',
                'Authorization': token,
                ApplicationCode: TabConstant.Common.applicationCode
            });
        }
        return null;
    }
}