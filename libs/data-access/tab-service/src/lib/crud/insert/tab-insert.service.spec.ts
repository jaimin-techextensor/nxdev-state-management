import { TestBed } from '@angular/core/testing';

import { TabInsertService } from './tab-insert.service';

describe('TabInsertService', () => {
  let service: TabInsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabInsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
