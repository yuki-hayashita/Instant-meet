import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarCreatorService } from './service/calendar-creator.service';
import { CalendarDateComponent } from './calendar/calendar-date.component';
import { NewEventComponent } from './new-event/new-event.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
import { TimezonePickerComponent } from './timezone-picker/timezone-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { FillAvailabilityComponent } from './fill-availability/fill-availability.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDateComponent,
    NewEventComponent,
    TimezonePickerComponent,
    TimePickerComponent,
    FillAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CalendarCreatorService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
