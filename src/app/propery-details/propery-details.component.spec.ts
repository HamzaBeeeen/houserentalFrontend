import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperyDetailsComponent } from './propery-details.component';

describe('ProperyDetailsComponent', () => {
  let component: ProperyDetailsComponent;
  let fixture: ComponentFixture<ProperyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProperyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProperyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
