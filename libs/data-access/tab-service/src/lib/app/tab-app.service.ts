import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as tabActions from '../++state/tab-data.actions';
import { TabConstant } from '../util/constant';
import { TabRequestResponseFunction } from '../util/request-response/request-response-function';
import { TabCoreHttpService } from './../common/tab-core-http.service';

@Injectable()

export class TabAppService {

  constructor(private tabCoreHttpService: TabCoreHttpService, private readonly store: Store) { }

  rebuildApp() {
    var headers = TabRequestResponseFunction.getHeaders();
    if (headers) {
      const url = TabConstant.API.endpoint + TabConstant.API.buildApp
      return this.tabCoreHttpService.post(
        url,
        headers
      );
    }
    return null;
  }

  getSchema(version: string) {
    var headers = TabRequestResponseFunction.getHeaders();
    if (headers) {
      let url = '';
      if (version) {
        url = TabConstant.API.endpoint + TabConstant.API.getSchema + "?version=" + version;
      } else {
        url = TabConstant.API.endpoint + TabConstant.API.getSchema;
      }
      return this.tabCoreHttpService.get(
        url,
        headers
      ).subscribe(res => {
        if (res) {
          //state management for setting tab json
          this.store.dispatch(tabActions.tabData({ tabData: { res } }));
        }
      });
    }
    return null;
  }

  log(logs: any) {
    var headers = TabRequestResponseFunction.getHeaders();
    if (headers) {
      const url = TabConstant.API.endpoint + TabConstant.API.log;
      return this.tabCoreHttpService.post(
        url,
        logs,
        headers
      );
    }
    return null;
  }

  publishApp(version: string) {
    var headers = TabRequestResponseFunction.getHeaders();
    if (headers) {
      const url = TabConstant.API.endpoint + TabConstant.API.publishApp + '?version=' + version;
      return this.tabCoreHttpService.get(
        url,
        headers
      );
    }
    return null;
  }
}
