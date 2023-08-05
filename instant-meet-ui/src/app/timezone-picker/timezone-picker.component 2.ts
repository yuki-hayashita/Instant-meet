import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-timezone-picker',
  templateUrl: './timezone-picker.component.html',
  styleUrls: ['./timezone-picker.component.scss']
})
export class TimezonePickerComponent implements OnInit {
  timeZones: string[]; // Array to hold time zones
  selectedTimeZone: string; // Variable to store the selected time zone

  @Output() timeZoneSelected = new EventEmitter<string>(); // Output event to emit the selected time zone

  constructor() {
    this.timeZones = moment.tz.names(); // Get all time zones using moment-timezone

    // Get the local time zone of the user
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Check if the local time zone exists in the timeZones array
    if (this.timeZones.includes(localTimeZone)) {
      this.selectedTimeZone = localTimeZone; // Set the local time zone as the default value
    } else {
      this.selectedTimeZone = 'UTC'; // Set a fallback default value if the local time zone is not found
    }
  }

  ngOnInit(): void {
    this.onSelectTimeZone();
  }

  onSelectTimeZone(): void {
    this.timeZoneSelected.emit(this.selectedTimeZone); // Emit the selected time zone
  }
}
