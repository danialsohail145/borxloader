import { TestBed } from '@angular/core/testing';

import { BorxloaderService } from './borxloader.service';

describe('BorxloaderService', () => {
  let service: BorxloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorxloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
