import { TestBed } from '@angular/core/testing';

import { MostViwedService } from './most-viwed.service';

describe('MostViwedService', () => {
  let service: MostViwedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostViwedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
