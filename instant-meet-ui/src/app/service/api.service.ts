import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';;

export interface TimeSlot {
  id: number;
  start_time: string;
}

export interface EventResponse {
  id: number;
  title: string;
  link: string;
  timeSlots: TimeSlot[];
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  createEvent(title: string, dates: string[], selectedEarliestTime: string, selectedLatestTime: string, selectedTimeZone: string): Observable<EventResponse> {
    // const url = 'http://localhost:8080/api/v1.1/createEvent';
    // const body = {
    //   title: title,
    //   dates: dates,
    //   earliest_time: selectedEarliestTime,
    //   latest_time: selectedLatestTime,
    //   timeZone: selectedTimeZone,
    // };
  
    // // Observableをreturnする
    // return this.http.post<EventResponse>(url, body);
    const eventRes: EventResponse = {
      id: 3,
      title: 'hello',
      link: '467a0a7b-cdbf-4149-a168-6556e6fb5ed9',
      timeSlots: [{
        "id": 143,
        "start_time": "2023-08-15T18:00:00+09:00"
    },
    {
        "id": 144,
        "start_time": "2023-08-16T18:00:00+09:00"
    },
    {
        "id": 145,
        "start_time": "2023-08-15T18:30:00+09:00"
    },
    {
        "id": 146,
        "start_time": "2023-08-16T18:30:00+09:00"
    },
    {
        "id": 147,
        "start_time": "2023-08-15T19:00:00+09:00"
    },
    {
        "id": 148,
        "start_time": "2023-08-16T19:00:00+09:00"
    },
    {
        "id": 149,
        "start_time": "2023-08-15T19:30:00+09:00"
    },
    {
        "id": 150,
        "start_time": "2023-08-16T19:30:00+09:00"
    },
    {
        "id": 151,
        "start_time": "2023-08-15T20:00:00+09:00"
    },
    {
        "id": 152,
        "start_time": "2023-08-16T20:00:00+09:00"
    }]
    }
    return of(eventRes);
  }
}
