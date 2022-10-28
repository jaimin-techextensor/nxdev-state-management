import { TestBed } from '@angular/core/testing';

import { TabDeleteService } from './tab-delete.service';

describe('TabDeleteService', () => {
  let service: TabDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
