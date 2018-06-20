import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';

@Injectable()
export class SpinnerService {
  status: Subject<boolean> = new Subject<boolean>();
  _showSpinner = false;
  activeReasons = 0;

  get active(): boolean {
    return this._showSpinner;
  }

  set showSpinner(status: boolean) {
    this._showSpinner = status;
    this.status.next(status);
  }

  start(): void {
    this.activeReasons++;
    this.showSpinner = true;
  }

  stop(): void {
    this.activeReasons--;
    if (this.activeReasons <= 0) {
      this.activeReasons = 0;
      this.showSpinner = false;
    }
  }

  hardStop(): void {
    this.activeReasons = 0;
    this.showSpinner = false;
  }
}
