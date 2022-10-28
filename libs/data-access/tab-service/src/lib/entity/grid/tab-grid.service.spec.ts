import { TestBed } from '@angular/core/testing';

import { TabGridService } from './tab-grid.service';

describe('TabGridService', () => {
  let service: TabGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
