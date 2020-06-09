import { TestBed } from '@angular/core/testing';

import { DisordersService } from './disorders.service';

describe('DisordersService', () => {
  let service: DisordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
