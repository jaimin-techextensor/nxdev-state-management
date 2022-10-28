import { TestBed } from '@angular/core/testing';

import { TabAuthenticationService } from './tab-authentication.service';

describe('TabAuthenticationService', () => {
  let service: TabAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
