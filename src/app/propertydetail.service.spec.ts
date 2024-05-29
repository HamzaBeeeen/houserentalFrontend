import { TestBed } from '@angular/core/testing';

import { PropertydetailService } from './propertydetail.service';

describe('PropertydetailService', () => {
  let service: PropertydetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertydetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
