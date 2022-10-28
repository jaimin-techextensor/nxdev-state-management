import { Injectable } from '@angular/core';
import { TabCoreHttpService } from '../../common/tab-core-http.service';
import { TabConstant } from '../../util/constant';
import { TabRequestResponseFunction } from '../../util/request-response/request-response-function';

@Injectable()

export class TabGetService {

  constructor(private tabCoreHttpService: TabCoreHttpService) { }

  executeRAWDSQWithName(data: any) {
    var headers = TabRequestResponseFunction.getHeaders();
    if (headers) {
      return this.tabCoreHttpService.post(TabConstant.API.endpoint + TabConstant.API.getDSQ + '/' + data.AppObjectName + '/' + data.DSQName, data, headers);
    }
    return null;
  }
}
