import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { v } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private _cookieService: CookieService) {

  }

  /**
   * to set the data in cookie
   * @param key 
   * @param value 
   */
  setValueInCookie(key: string, value: string) {
    this._cookieService.put(key, value);
  }

  /**
   * to fetch the value from cookie 
   * @param key 
   */
  getValueFromCookie(key: string) {
    return this._cookieService.get(key);
  }

  /**
   * 
   * @param key 
   */
  deleteValueFromCookie(key: string) {
    this._cookieService.remove(key);
  }

  getAllDetailsFromCookie() {
    return this._cookieService.getAll();
  }
}
