import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TabConstant } from '../util/constant';
import { TabCoreHttpService } from './../common/tab-core-http.service';

@Injectable()

export class TabAuthenticationService {

  constructor(private tabCoreHttpService: TabCoreHttpService) { }

  login(user: any) {
    var data = {
      "Email": user.username,
      "Password": user.password
    };
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ApplicationCode: TabConstant.Common.applicationCode
    });
    return this.tabCoreHttpService.post(TabConstant.API.endpoint + '' + TabConstant.API.login, data, headers);
  };
}
