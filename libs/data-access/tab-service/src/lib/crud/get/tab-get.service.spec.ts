import { TestBed } from '@angular/core/testing';

import { TabGetService } from './tab-get.service';

describe('TabGetService', () => {
  let service: TabGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
