import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  /**
 * to set the data in Local
 * @param key 
 * @param value 
 */
  setValueInLocal(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * to fetch the value from Local 
   * @param key 
   */
  getValueFromLocal(key: string): string {
    return localStorage.getItem(key);
  }

  /**
   * 
   * @param key 
   */
  deleteValueFromLocal(key: string): void {
    localStorage.removeItem(key);
  }
  /**
   * 
   */
  getAllDetailsFromLocal(): number {
    return localStorage.length;
  }

}
