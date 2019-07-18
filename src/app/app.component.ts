import { Component } from '@angular/core';
import { CookiesService } from './services/cookies.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from './services/local.service';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storage-concept';
  titleList: any[];
  selectedColor: string;
  operationList: any[];
  selectedOp: any;
  constructor(private cookieService: CookiesService,
    private _snackBar: MatSnackBar,
    private localService: LocalService,
    private sessionService: SessionService,
  ) {
    this.titleList = [
      { name: 'Cookie', code: '1' },
      { name: 'Local', code: '2' },
      { name: 'Session', code: '3' }
    ];

    this.operationList = [
      { name: 'Set', code: '1' },
      { name: 'Get', code: '2' },
      { name: 'Delete', code: '3' },
    ]
  }

  /**
   * 
   * @param item 
   */
  onSelection(item: object): void {
    this.selectedOp = item;
    this.selectedColor = this.setBackgroundColor(item);
  }

  /**
   * 
   * @param item 
   */
  setBackgroundColor(item: object): string {
    return (item['code'] === '1') ? '#3f51b5' : ((item['code'] === '2') ? '' : '#f44336');
  }

  /**
   * 
   */
  onMakeOperation(operation: object) {
    // cookie
    if (this.selectedOp['code'] === '1') {
      this.cookieOperations(operation);
    } else if (this.selectedOp['code'] === '2') {
      this.localStorageOperation(operation);
    } else if (this.selectedOp['code'] === '3') {
      this.sessionStorageOperation(operation);
    }
  }

  /**
   * 
   * @param message 
   * @param action 
   */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * 
   * @param operation 
   */
  cookieOperations(operation: object): void {
    let message: string;
    // set
    if (operation['code'] === '1') {
      this.cookieService.setValueInCookie('test', `132`);
      this.openSnackBar(`value inserted in  ${this.selectedOp['name']}`, '');
    } else if (operation['code'] === '2') {
      message = this.cookieService.getValueFromCookie('test');
      if (message === undefined) {
        this.openSnackBar('cookie is empty', '');
      } else
        this.openSnackBar(message, '');
    } else if (operation['code'] === '3') {
      if (!this.cookieService.getAllDetailsFromCookie().hasOwnProperty('test')) {
        this.openSnackBar('cookie is empty to delete', '');
      } else {
        this.cookieService.deleteValueFromCookie('test');
        this.openSnackBar('Deleted value from cookie', '');
      }
    }
  }
  /**
   * 
   * @param operation 
   */

  localStorageOperation(operation: object): void {
    let message: string;
    // set
    if (operation['code'] === '1') {
      this.localService.setValueInLocal('localtest', `1594`);
      this.openSnackBar(`value inserted in  ${this.selectedOp['name']}`, '');
    } else if (operation['code'] === '2') {
      message = this.localService.getValueFromLocal('localtest');
      if (message === undefined) {
        this.openSnackBar('local storage is empty', '');
      } else this.openSnackBar(message, '');
    } else if (operation['code'] === '3') {
      if (this.localService.getAllDetailsFromLocal() > 0) {
        this.openSnackBar('local storage is empty to delete', '');
      } else {
        this.localService.deleteValueFromLocal('test');
        this.openSnackBar('Deleted value from local storage', '');
      }
    }
  }

  sessionStorageOperation(operation: object): void {
    let message: string;
    // set
    if (operation['code'] === '1') {
      this.sessionService.setValueInSession('sessiontest', `1994`);
      this.openSnackBar(`value inserted in  ${this.selectedOp['name']}`, '');
    } else if (operation['code'] === '2') {
      message = this.sessionService.getValueFromSession('sessiontest');
      if (message === null || undefined) {
        this.openSnackBar('session storage is empty', '');
      } else this.openSnackBar(message, '');
    } else if (operation['code'] === '3') {
      if (!(this.sessionService.getAllDetailsFromSession() > 0)) {
        this.openSnackBar('session storage is empty to delete', '');
      } else {
        this.sessionService.deleteValueFromSession('sessiontest');
        this.openSnackBar('Deleted value from session storage', '');
      }
    }
  }
}
