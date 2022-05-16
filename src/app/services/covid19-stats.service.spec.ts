import { TestBed } from '@angular/core/testing';

import { Covid19StatsService } from './covid19-stats.service';

describe('Covid19StatsService', () => {
  let service: Covid19StatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19StatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
