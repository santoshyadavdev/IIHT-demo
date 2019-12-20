import { TestBed, async, inject } from '@angular/core/testing';

import { FormsGuard } from './forms.guard';

describe('FormsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormsGuard]
    });
  });

  it('should ...', inject([FormsGuard], (guard: FormsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
