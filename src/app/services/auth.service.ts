import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string =
    'https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login';

  constructor(private httpService: HttpClient) {}

  login(email: string, password: string): Observable<Object> {
    return this.httpService.post(this.baseUrl, {
      email: email,
      password: password
    });
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  public get token(): string {
    return localStorage.getItem('auth_token');
  }

  public get logIn(): boolean {
    return localStorage.getItem('auth_token') !== null;
  }
}
