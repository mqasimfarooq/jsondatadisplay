import { TestBed } from '@angular/core/testing';

import { CreateservService } from './createserv.service';

describe('CreateservService', () => {
  let service: CreateservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
