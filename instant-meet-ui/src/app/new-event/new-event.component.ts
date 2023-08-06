import { Component } from '@angular/core';
import { TimezonePickerComponent } from '../timezone-picker/timezone-picker.component';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {
  selectedTimeZone: string;
  selectedTime: string;

  onTimeZoneSelected(timeZone: string): void {
    alert(timeZone);
    this.selectedTimeZone = timeZone; // Update the selected time zone
  }

  onTimeChanged(time: string): void {
    alert(time);
    this.selectedTime = time;
  }
}
