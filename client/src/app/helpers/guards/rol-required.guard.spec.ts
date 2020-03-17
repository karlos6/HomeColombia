import { TestBed, async, inject } from '@angular/core/testing';

import { RolRequiredGuard } from './rol-required.guard';

describe('RolRequiredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolRequiredGuard]
    });
  });

  it('should ...', inject([RolRequiredGuard], (guard: RolRequiredGuard) => {
    expect(guard).toBeTruthy();
  }));
});
