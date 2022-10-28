import { TabCommonService } from './../../common/tab-common.service';
import { Injectable } from '@angular/core';
import { TabEnums } from '../../util/enum';
import { TabClasses } from '../../util/class';

@Injectable()

export class TabSelectService {

  constructor(private tabCommonService: TabCommonService) { }

  selectExecutor(data: TabClasses.APISelectQuery) {
    return this.tabCommonService.executeQuery(data, TabEnums.QueryType.Select);
  }
}
