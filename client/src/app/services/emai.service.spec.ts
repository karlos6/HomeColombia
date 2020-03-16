import { TestBed } from '@angular/core/testing';

import { EmaiService } from './emai.service';

describe('EmaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmaiService = TestBed.get(EmaiService);
    expect(service).toBeTruthy();
  });
});
