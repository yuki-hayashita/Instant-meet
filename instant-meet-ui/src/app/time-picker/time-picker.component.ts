import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment'; 

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  hours: string[] = ['12:00 AM'];

  selectedTime: string;

  @Output() timeChanged = new EventEmitter<string>();

  ngOnInit(): void {
    this.generateHoursArray();
  }

  generateHoursArray(): void {
    for (let i = 1; i <= 12; i++) {
      const hour12Format = i.toString().padStart(2, '0');
      this.hours.push(`${hour12Format}:00 AM`);
    }
    for (let i = 1; i <= 11; i++) {
      const hour12Format = i.toString().padStart(2, '0');
      this.hours.push(`${hour12Format}:00 PM`);
    }
    this.hours.push('12:00 AM');
  }

  onTimeChange(): void {
    const timeMoment = moment(this.selectedTime, 'hh:mm A'); // Parse the selected time with format "hh:mm AM/PM"
    this.selectedTime = timeMoment.format('HH:mm'); // Convert to military time format "HH:mm"
    this.timeChanged.emit(this.selectedTime);
  }
}