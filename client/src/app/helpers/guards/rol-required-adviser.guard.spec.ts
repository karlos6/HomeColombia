import { TestBed, async, inject } from '@angular/core/testing';

import { RolRequiredAdviserGuard } from './rol-required-adviser.guard';

describe('RolRequiredAdviserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolRequiredAdviserGuard]
    });
  });

  it('should ...', inject([RolRequiredAdviserGuard], (guard: RolRequiredAdviserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
