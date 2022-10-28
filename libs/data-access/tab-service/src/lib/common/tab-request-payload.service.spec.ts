import { TestBed } from '@angular/core/testing';

import { TabRequestPayloadService } from './tab-request-payload.service';

describe('TabRequestPayloadService', () => {
  let service: TabRequestPayloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabRequestPayloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
