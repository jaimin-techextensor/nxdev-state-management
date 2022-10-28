/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TabPluginService } from './tab-plugin.service';

describe('Service: TabPlugin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabPluginService]
    });
  });

  it('should ...', inject([TabPluginService], (service: TabPluginService) => {
    expect(service).toBeTruthy();
  }));
});
