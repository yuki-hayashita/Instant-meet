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
import { MatInputModule } from '@angular/material/input';
import { TimezonePickerComponent } from './timezone-picker/timezone-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDateComponent,
    NewEventComponent,
    TimezonePickerComponent,
    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [CalendarCreatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
