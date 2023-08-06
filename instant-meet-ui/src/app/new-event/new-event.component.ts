import { Component, ViewChild } from '@angular/core';
import { ApiService, EventResponse } from '../service/api.service';
import { Router } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {
  selectedTimeZone: string;
  selectedEarliestTime: string;
  selectedLatestTime: string;
  eventName: string;
  @ViewChild(CalendarComponent) calendarComponent;

  constructor(private apiService: ApiService, private router: Router) {}

  onCreateEvent() {
    const dates = this.calendarComponent.selectedDates;
    this.apiService.createEvent(this.eventName, dates, this.selectedEarliestTime, this.selectedLatestTime, this.selectedTimeZone).subscribe(
      (response: EventResponse) => {
        const hashValue = response.link; // Replace 'hash' with the actual property name in your API response
        console.log(hashValue)
        // Use the hash value to navigate to the desired page with the hash in the URL
        this.router.navigate(['/fill-availability', hashValue]); // Replace 'your-page' with the actual route path of the destination page
      },
      (error: any) => {
        console.error('Error fetching hash from API:', error);
      }
    );
  }

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
