import { TestBed } from '@angular/core/testing';

import { TabWhereClauseService } from './tab-where-clause.service';

describe('TabWhereClauseService', () => {
  let service: TabWhereClauseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabWhereClauseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
