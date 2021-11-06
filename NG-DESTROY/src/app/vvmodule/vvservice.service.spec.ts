import { TestBed } from '@angular/core/testing';

import { VvserviceService } from './vvservice.service';

describe('VvserviceService', () => {
  let service: VvserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VvserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
