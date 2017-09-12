import { TestBed, inject } from '@angular/core/testing';

import { TruthServiceService } from './truth-service.service';

describe('TruthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TruthServiceService]
    });
  });

  it('should be created', inject([TruthServiceService], (service: TruthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
