import { find } from 'lodash';
import { TabConstant } from '../../constant';

export namespace TabScreenFunction {

    export function getScreen(screenId: string) {
        let tabData: any = TabConstant.Common.tabJson;
        if (tabData) {
            return find(tabData?.AppScreens, (t: any) => t.ID == screenId.toLowerCase());
        } else
            return null;
    }
}