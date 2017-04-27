import { TestBed, inject } from '@angular/core/testing';

import { ToolsManagerService } from './tools-manager.service';

describe('ToolsManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolsManagerService]
    });
  });

  it('should ...', inject([ToolsManagerService], (service: ToolsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
