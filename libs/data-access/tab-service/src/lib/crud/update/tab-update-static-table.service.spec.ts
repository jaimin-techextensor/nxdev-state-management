import { TestBed } from '@angular/core/testing';

import { TabUpdateStaticTableService } from './tab-update-static-table.service';

describe('TabUpdateStaticTableService', () => {
  let service: TabUpdateStaticTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabUpdateStaticTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
