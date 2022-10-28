import { TestBed } from '@angular/core/testing';

import { TabSelectService } from './tab-select.service';

describe('TabSelectService', () => {
  let service: TabSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
