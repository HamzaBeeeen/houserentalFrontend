import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from './models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertydetailService {

  private baseUrl = 'http://localhost:8021/api/';

  constructor(private http: HttpClient) { }

  getProperty(id: string): Observable<Property> {
    return this.http.get<Property>(`${this.baseUrl}/property/${id}`);
  }

}
