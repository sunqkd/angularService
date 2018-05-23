import { TestBed, inject } from '@angular/core/testing';

import { AnotherstockserviceService } from './anotherstockservice.service';

describe('AnotherstockserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherstockserviceService]
    });
  });

  it('should be created', inject([AnotherstockserviceService], (service: AnotherstockserviceService) => {
    expect(service).toBeTruthy();
  }));
});
