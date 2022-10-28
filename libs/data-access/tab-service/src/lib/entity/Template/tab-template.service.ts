import { Injectable } from '@angular/core';
import { TabCoreHttpService } from '../../common/tab-core-http.service';
import { TabConstant } from '../../util/constant';
import { TabRequestResponseFunction } from '../../util/request-response/request-response-function';

@Injectable()

export class TabTemplateService {

    constructor(private tabCoreHttpService: TabCoreHttpService) { }

    templateParse(data: any) {
        var headers = TabRequestResponseFunction.getHeaders();
        if (headers) {
            return this.tabCoreHttpService.post(TabConstant.API.endpoint + TabConstant.API.templateParse , data, headers);
        }
        return null;
    }

}

