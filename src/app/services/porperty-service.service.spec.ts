import { TestBed } from '@angular/core/testing';

import { PorpertyServiceService } from './porperty-service.service';

describe('PorpertyServiceService', () => {
  let service: PorpertyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorpertyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
