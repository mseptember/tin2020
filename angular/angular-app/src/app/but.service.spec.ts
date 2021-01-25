import { TestBed } from '@angular/core/testing';

import { ButService } from './but.service';

describe('ButService', () => {
  let service: ButService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
