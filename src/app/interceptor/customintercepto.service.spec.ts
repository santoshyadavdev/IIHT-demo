import { TestBed } from '@angular/core/testing';

import { CustominterceptoService } from './customintercepto.service';

describe('CustominterceptoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustominterceptoService = TestBed.get(CustominterceptoService);
    expect(service).toBeTruthy();
  });
});
