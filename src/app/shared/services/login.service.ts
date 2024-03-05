import { Observable } from 'rxjs';

export abstract class LoginService {
  abstract login(email: string, password: string): Observable<boolean>;
  abstract getIsAdmin(): Observable<boolean>;
  abstract logout(): Observable<void>;
}
