import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertydetailService } from '../../propertydetail.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  property: any;

  constructor(private route: ActivatedRoute, private PropertydetailService: PropertydetailService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.PropertydetailService.getProperty(String(id)).subscribe(data => {
      this.property = data;
    });
  }
}
