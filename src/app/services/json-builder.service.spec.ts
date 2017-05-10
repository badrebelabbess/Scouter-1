import { TestBed, inject } from '@angular/core/testing';

import { JsonBuilderService } from './json-builder.service';

describe('JsonBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonBuilderService]
    });
  });

  it('should ...', inject([JsonBuilderService], (service: JsonBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
