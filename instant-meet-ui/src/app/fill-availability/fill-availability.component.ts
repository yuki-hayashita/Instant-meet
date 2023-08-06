import { Component } from '@angular/core';

@Component({
  selector: 'app-fill-availability',
  templateUrl: './fill-availability.component.html',
  styleUrls: ['./fill-availability.component.scss']
})
export class FillAvailabilityComponent {
  columns: number[] = Array.from({ length: 4 }, (_, index) => index + 1);
  rows: number[] = Array.from({ length: 48 }, (_, index) => index + 1);
}
