import { TestBed } from '@angular/core/testing';

import { TabDynamicObjectService } from './tab-dynamic-object.service';

describe('TabDynamicObjectService', () => {
  let service: TabDynamicObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabDynamicObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
