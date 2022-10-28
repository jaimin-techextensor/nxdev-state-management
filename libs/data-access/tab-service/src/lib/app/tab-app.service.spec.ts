import { TestBed } from '@angular/core/testing';

import { TabAppService } from './tab-app.service';

describe('TabAppService', () => {
  let service: TabAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
