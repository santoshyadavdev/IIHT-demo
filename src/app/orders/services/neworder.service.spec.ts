import { TestBed } from '@angular/core/testing';

import { NeworderService } from './neworder.service';

describe('NeworderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeworderService = TestBed.get(NeworderService);
    expect(service).toBeTruthy();
  });
});
