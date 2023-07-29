import { TestBed } from '@angular/core/testing';

import { DbdataService } from './dbdata.service';

describe('DbdataService', () => {
  let service: DbdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
