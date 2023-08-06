import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAvailabilityComponent } from './fill-availability.component';

describe('FillAvailabilityComponent', () => {
  let component: FillAvailabilityComponent;
  let fixture: ComponentFixture<FillAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillAvailabilityComponent]
    });
    fixture = TestBed.createComponent(FillAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
