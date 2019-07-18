import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  /**
 * to set the data in Session
 * @param key 
 * @param value 
 */
  setValueInSession(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  /**
   * to fetch the value from Session 
   * @param key 
   */
  getValueFromSession(key: string): string {
    return sessionStorage.getItem(key);
  }

  /**
   * delete value from the session
   * @param key 
   */
  deleteValueFromSession(key: string): void {
    sessionStorage.removeItem(key);
  }

  /**
   *get the length of keys in the session storage 
   */
  getAllDetailsFromSession(): number {
    return sessionStorage.length;
  }
}
