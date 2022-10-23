import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  sendCredentials(email: string, password: string) {
    const body = {
      email,
      password
    }

  }

  suma(a: number, b: number): number {
    return a + b
  }
}
