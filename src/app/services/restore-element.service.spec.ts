import { TestBed, inject } from '@angular/core/testing';

import { RestoreElementService } from './restore-element.service';

describe('RestoreElementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestoreElementService]
    });
  });

  it('should ...', inject([RestoreElementService], (service: RestoreElementService) => {
    expect(service).toBeTruthy();
  }));
});
