import { Component, OnInit } from "@angular/core";
import { CalendarCreatorService } from "../service/calendar-creator.service";
import { Day } from "../model/day.model";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})

export class CalendarComponent implements OnInit {
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = [];

  constructor(public calendarCreatorService: CalendarCreatorService) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreatorService.getCurrentMonth());

    this.weekDaysName.push("Mo");
    this.weekDaysName.push("Tu");
    this.weekDaysName.push("We");
    this.weekDaysName.push("Th");
    this.weekDaysName.push("Fr");
    this.weekDaysName.push("Sa");
    this.weekDaysName.push("Su");
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarCreatorService.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() : void{
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarCreatorService.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}