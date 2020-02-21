import { TestBed } from '@angular/core/testing';

import { GlobalHttpRequestInterceptorServiceService } from './global-http-request-interceptor-service.service';

describe('GlobalHttpRequestInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalHttpRequestInterceptorServiceService = TestBed.get(GlobalHttpRequestInterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
