import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  propertyId!: number;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8021/api/properties') // Replace with your backend API endpoint
      .subscribe((response: any) => {
        this.propertyId = response.propertyId; // Assign the product ID from the backend response
      });
  }

  redirectToProductDetails(): void {
    this.http.get(`http://localhost:8021/api/properties/${this.propertyId}`)
      .subscribe((response: any) => {
        const propertyDetails = response;
        this.router.navigate(['/property-details', propertyDetails]);
      });
  }
}
