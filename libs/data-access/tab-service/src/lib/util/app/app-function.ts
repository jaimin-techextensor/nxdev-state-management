import { find } from 'lodash';
import { TabClasses } from '../class';
import { TabConstant } from '../constant';
import { TabRequestResponseFunction } from '../request-response/request-response-function';

export namespace TabAppFunction {

    export function getDsqIdfromSelectedAppObjectDSQArray(dsqList: any, table: string, like: string) {
        if (dsqList) {
            const matchName = like + '_' + table;
            const result = find(dsqList, (d: any) => d.QueryName == matchName);
            return result.ID;
        }
    }

    export function getAppObject(id: string) {
        var tabData: any | null = TabConstant.Common.tabJson;
        if (tabData) {
            return find(tabData?.AppObjects, (t: any) => t.ID == id?.toLowerCase());
        } else
            return null;
    }

    export function getAppObjectFromDataSourceQueryID(dsqId: string) {
        let dsq = null;
        let matchObject = null;
        let tabData: any = TabConstant.Common.tabJson;
        if (tabData) {
            const dsqList = tabData.AppObjects.map((a: any) => a.DataSourceQueries);
            for (var i = 0; i < tabData?.AppObjects.length; i++) {
                dsq = find(dsqList[i], l => l.ID == dsqId.toLowerCase());
                if (!!dsq) {
                    matchObject = tabData?.AppObjects[i];
                    return matchObject;
                }
            }
        }
        return null;
    }

    export function getDsqIDFromQueryName(table: string, dsq: string) {
        const appObjectList = getAppObjectFromSystemDBTableName(table);
        const result = find(appObjectList.DataSourceQueries, (d: any) => d.QueryName == dsq);
        return result
    }

    export function getDataFromDataSourceQueryID(dsqId: string) {
        let tabData: any = TabConstant.Common.tabJson;
        let DSQ : any;
        if (tabData) {
            for (var i = 0; i < tabData?.AppObjects.length; i++) {
                DSQ = find(tabData?.AppObjects[i].DataSourceQueries, (l: any) => l.ID == dsqId?.toLowerCase());
                if (!!DSQ)
                    break;
            }
        } else
            return null;
        return DSQ;
    }

    export function syncAppObjectFields(response: any, appObject: TabClasses.AppObject) {
        for (const key in response) {
            let foundObj = find(appObject.Fields, (f: any) => f.FieldName == key);
            if (!foundObj)
                TabRequestResponseFunction.deleteKeyFromResponse(response, key)
        }
        return response;
    }

    export function getAppObjectFromSystemDBTableName(tableName: string) {
        let tabData: any = TabConstant.Common.tabJson;
        if (tabData) {
            return find(tabData?.AppObjects, t => t.SystemDBTableName == tableName);
        }
        else
            return null;
    }
}