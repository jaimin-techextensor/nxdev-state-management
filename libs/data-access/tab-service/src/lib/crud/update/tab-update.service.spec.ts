import { TestBed } from '@angular/core/testing';

import { TabUpdateService } from './tab-update.service';

describe('TabUpdateService', () => {
  let service: TabUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
