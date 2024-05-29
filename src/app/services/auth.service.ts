import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8021/api';

  constructor(private http: HttpClient) {}

  registerUser(signupDTO: any){
    return this.http.post('${this.apiUrl}/auth', signupDTO)
  }
}
