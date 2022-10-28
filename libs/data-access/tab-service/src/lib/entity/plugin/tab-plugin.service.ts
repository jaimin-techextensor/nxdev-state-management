import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { TabCoreHttpService } from '../../common/tab-core-http.service';
import { TabConstant } from '../../util/constant';
import { TabRequestResponseFunction } from '../../util/request-response/request-response-function';

@Injectable()

export class TabPluginService {

    constructor(private tabCoreHttpService: TabCoreHttpService, private httpClient: HttpClient) { }

    uploadPlugin(pluginObject: any) {
        var headers = TabRequestResponseFunction.getFormDataHeaders();
        if (headers) {
            const url = TabConstant.API.endpoint + TabConstant.API.pluginUpload
            return this.tabCoreHttpService.post(
                url,
                pluginObject,
                headers
            );
        }
        return null;
    }

    getFile(Id: number) {
        var headers = TabRequestResponseFunction.getHeaders();
        if (headers) {
            const url = TabConstant.API.endpoint + TabConstant.API.getFile + "?Id=" + Id;
            return this.httpClient
                .get(url, { responseType: 'blob' as 'json', headers: headers })
                .pipe(map((res: any) => {
                    return res;
                }),
                    catchError(this.tabCoreHttpService.errorHandler));
        }
        return null;
    }

    getAll(pluginType: number) {
        var headers = TabRequestResponseFunction.getHeaders();
        if (headers) {
            const url = TabConstant.API.endpoint + TabConstant.API.getAllPluginByType + "?PluginTypeId=" + pluginType;
            return this.tabCoreHttpService.get(
                url,
                headers
            );
        }
        return null;
    }

}
