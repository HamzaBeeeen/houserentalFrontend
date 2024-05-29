import { Component, OnInit } from '@angular/core';
import { PorpertyServiceService } from '../../services/porperty-service.service';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PorpertyServiceService) {}

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe((properties) => {
      this.properties = properties;
      console.log('Number of properties:', this.properties.length);
    });
  }
}