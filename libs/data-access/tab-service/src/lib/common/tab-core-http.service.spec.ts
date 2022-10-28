import { TestBed } from '@angular/core/testing';

import { TabCoreHttpService } from './tab-core-http.service';

describe('TabCoreHttpService', () => {
  let service: TabCoreHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabCoreHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
