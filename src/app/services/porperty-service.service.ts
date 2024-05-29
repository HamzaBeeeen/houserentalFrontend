import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PorpertyServiceService {

  private apiUrl = 'http://localhost:8021/api/property/properties'
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(() => error.message);
  }
  
  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl).pipe(
      tap((properties) => console.log('Number of properties returned by API:', properties.length)),
      catchError(this.handleError)
    );
  }
}
