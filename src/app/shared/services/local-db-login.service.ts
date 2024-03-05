import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({ providedIn: 'root' })
export class LocalDBLoginService extends LoginService {
  private isAdminUser = false;
  private userAdmin = {
    email: 'demo@demo.com',
    password: '12345678',
  };

  login(email: string, password: string): Observable<boolean> {
    if (
      this.userAdmin.email === email &&
      this.userAdmin.password === password
    ) {
      this.isAdminUser = true;
    }
    return new Observable((observable) => observable.next(this.isAdminUser));
  }

  getIsAdmin(): Observable<boolean> {
    this.isAdminUser = true;
    return new Observable((observable) => observable.next(this.isAdminUser));
  }

  logout(): Observable<void> {
    this.isAdminUser = false;
    return of();
  }
}
