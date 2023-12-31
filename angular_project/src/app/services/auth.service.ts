import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  loggedIn$ = this.loggedInSubject.asObservable();

  setLoggedIn(value: boolean): void {
    this.loggedInSubject.next(value);
  }
}
