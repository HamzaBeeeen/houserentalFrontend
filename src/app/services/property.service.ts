import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiUrl = 'http://localhost:8021/api/property';
  constructor(private http: HttpClient) { }
  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>('${this.apiUrl}/${id}');
  }
}
