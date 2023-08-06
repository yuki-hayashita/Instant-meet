import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Placeholder function for getHashFromApi
  createEvent(): Observable<string> {
    const fixedHashValue = '467a0a7b-cdbf-4149-a168-6556e6fb5ed9';
    return of(fixedHashValue);
  }
}
