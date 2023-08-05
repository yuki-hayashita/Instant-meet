import { Component } from '@angular/core';
import { TimezonePickerComponent } from '../timezone-picker/timezone-picker.component';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {
  selectedTimeZone: string;
  selectedEarliestTime: string;
  selectedLatestTime: string;
  

  onTimeZoneSelected(timeZone: string): void {
    this.selectedTimeZone = timeZone; // Update the selected time zone
  }

  onEarliestTimeChanged(time: string): void {
    this.selectedEarliestTime = time;
  }

  onLatestTimeChanged(time: string): void {
    this.selectedLatestTime = time;
  }
}
