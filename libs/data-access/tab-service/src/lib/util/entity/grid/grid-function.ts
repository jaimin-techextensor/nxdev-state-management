import { find } from 'lodash';
import { TabAppFunction } from '../../app/app-function';
import { TabClasses } from '../../class';
import { TabConstant } from '../../constant';
import { TabGridClasses } from '../../tab-grid-class';

export namespace TabGridFunction {

    export function generateGridSchema(masterAppObj: TabClasses.AppObject, dsqID: any) {
        let schema = {};
        schema = {
            label: masterAppObj?.SystemDBTableName,
            type: 'customGrid',
            key: masterAppObj?.SystemDBTableName,
            input: true,
            redrawOn: masterAppObj?.SystemDBTableName,
            'customOptions.dataSourceQueryId': dsqID,
        }
        return schema;
    }

    export function generateChildGridSchema(childRel: any, masterAppObj: TabClasses.AppObject) {
        let schema = {};
        let dsqNameString = 'FK_' + childRel.childDetails.LookupObject + '_' + masterAppObj.SystemDBTableName;
        let dsqObject = TabAppFunction.getDsqIDFromQueryName(childRel.childDetails.LookupObject, dsqNameString);
        schema = {
            label: childRel?.childDetails?.LookupObject,
            type: 'customGrid',
            key: childRel?.childDetails?.LookupObject,
            input: true,
            redrawOn: masterAppObj?.SystemDBTableName,
            'customOptions.dataSourceQueryId': dsqObject ? dsqObject.ID : '',
            logic: [
                {
                    name: 'Update Fields',
                    trigger: {
                        type: 'javascript',
                        javascript: 'result=true;'
                    },
                    actions: [
                        {
                            name: 'Refresh ' + childRel?.childDetails?.LookupObject + ' Grid',
                            type: 'property',
                            property: {
                                label: 'parameters',
                                value: 'customOptions.parameters',
                                type: 'string'
                            },
                            text: '{{data.' + masterAppObj?.SystemDBTableName + '}}'
                        }
                    ]
                }
            ]
        }
        return schema;
    }

    export function getDefaultGridConfiguration() {
        let tabData: any = TabConstant.Common.tabJson;
        if (tabData) {
            let configuration = find(tabData.AppConfigurations, defaultData => { return defaultData.Setting_Key === 'GridConfig'; });
            let configValue: TabGridClasses.JqWidghtModel = new TabGridClasses.JqWidghtModel();
            if (!!configuration) {
                configValue = JSON.parse(configuration.Value);
            }
            return configValue;
        }
        return null;
    }

    export function getColumnType(dataType: number): string {
        if (dataType == 1 || (dataType >= 7 && dataType == 15))
            return 'string';
        else if (dataType == 2 || dataType == 4 || dataType == 16)
            return 'number';
        else if (dataType == 3)
            return 'boolean';
        else if (dataType = 4 || (dataType >= 7 && dataType <= 15))
            return 'string';
        else if (dataType = 5)
            return 'date';
        else if (dataType == 6)
            return 'dateTime';
        else
            return 'string';
    }
}