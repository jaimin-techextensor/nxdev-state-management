import { Injectable } from '@angular/core';
import { TabConstant } from '../util/constant';
import { TabEnums } from '../util/enum';
import { TabRequestResponseFunction } from '../util/request-response/request-response-function';
import { TabCoreHttpService } from './tab-core-http.service';

@Injectable()

export class TabCommonService {

  constructor(private tabCoreHttpService: TabCoreHttpService) {
  }

  executeQuery(data: any, queryType: TabEnums.QueryType) {
    switch (queryType) {
      case TabEnums.QueryType.Insert:
        return this.execution(data, TabConstant.API.endpoint + TabConstant.API.insert, true);
      case TabEnums.QueryType.Update:
        return this.execution(data, TabConstant.API.endpoint + TabConstant.API.update, true);
      case TabEnums.QueryType.Delete:
        return this.execution(data, TabConstant.API.endpoint + TabConstant.API.delete, true);
      case TabEnums.QueryType.Select:
        return this.execution(data, TabConstant.API.endpoint + TabConstant.API.select, true);
    }
    return null;
  }

  private execution(data: any, api: string, isAuth?: boolean) {
    const url = api;
    const headers = TabRequestResponseFunction.getHeaders();
    if (headers) {
      return this.tabCoreHttpService.post(url, data, headers);
    }
    return null;
  }
}
