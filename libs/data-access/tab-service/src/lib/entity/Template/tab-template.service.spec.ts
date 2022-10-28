/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TabTemplateService } from './tab-template.service';

describe('Service: TabTemplate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabTemplateService]
    });
  });

  it('should ...', inject([TabTemplateService], (service: TabTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
