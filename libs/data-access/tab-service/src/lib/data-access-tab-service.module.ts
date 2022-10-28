import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './++state';
import { TabAppService } from './app/tab-app.service';
import { TabAuthenticationService } from './authentication/tab-authentication.service';
import { TabCommonService } from './common/tab-common.service';
import { TabCoreHttpService } from './common/tab-core-http.service';
import { TabDynamicObjectService } from './common/tab-dynamic-object.service';
import { TabRequestPayloadService } from './common/tab-request-payload.service';
import { TabDeleteService } from './crud/delete/tab-delete.service';
import { TabGetService } from './crud/get/tab-get.service';
import { TabInsertService } from './crud/insert/tab-insert.service';
import { TabSelectService } from './crud/select/tab-select.service';
import { TabUpdateStaticTableService } from './crud/update/tab-update-static-table.service';
import { TabUpdateService } from './crud/update/tab-update.service';
import { TabFormService } from './entity/form/tab-form.service';
import { TabGridService } from './entity/grid/tab-grid.service';
import { TabPluginService } from './entity/plugin/tab-plugin.service';
import { TabTemplateService } from './entity/Template/tab-template.service';
import { TabWhereClauseService } from './query/where-clause/tab-where-clause.service';

@NgModule({
  imports: [CommonModule, HttpClientModule,
    StoreModule.forFeature('', reducers, { metaReducers })],
  providers: [TabCoreHttpService, TabCommonService, TabDynamicObjectService, TabRequestPayloadService, TabGetService, TabInsertService, TabDeleteService, TabWhereClauseService, TabUpdateService, TabGridService, TabAppService, TabUpdateStaticTableService, TabSelectService, TabFormService, TabAuthenticationService, TabPluginService, TabTemplateService]
})

export class DataAccessTabServiceModule { }
