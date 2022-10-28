import { TestBed } from '@angular/core/testing';

import { TabCommonService } from './tab-common.service';

describe('TabCommonService', () => {
  let service: TabCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
