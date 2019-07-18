import { TestBed } from '@angular/core/testing';

import { CookiesService } from './cookies.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

describe('CookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieService = TestBed.get(CookieService);
    expect(service).toBeTruthy();
  });
});
