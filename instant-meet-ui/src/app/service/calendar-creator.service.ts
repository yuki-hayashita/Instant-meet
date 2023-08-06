import { Day } from "../model/day.model";

export class CalendarCreatorService {
  private currentYear: number;
  private currentMonthIndex: number;
  private currentDate: number;

  constructor() {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth(); 
    this.currentDate = date.getDate();
  }

  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  public getToday(day: Day): Boolean {

    if (day.year !== this.currentYear) return false;
    if (day.monthIndex !== this.currentMonthIndex) return false;
    if (day.dayNumber !== this.currentDate) return false;

    return true;
  }

  public getMonth(monthIndex: number, year: number): Day[] {
    let days = [];

    let firstday = this.createDay(1, monthIndex, year);

    //create empty days
    for (let i = 0; i < firstday.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        monthIndex: monthIndex,
        year: year,
      } as Day);
    }
    days.push(firstday);
    //

    let countDaysInMonth = new Date(year, monthIndex +1, 0).getDate();
    for (let i = 2; i < countDaysInMonth +1; i++) {
      let newDate : Day = this.createDay(i, monthIndex, year);
      if (this.getToday(newDate)) newDate.today = true;
      days.push(newDate);
    }

    return days;
  }

  public getMonthName(monthIndex: number): string {
    switch (monthIndex+1) {
      case 1:
        return "January";      
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      case 13:
        return "January";

      default:
        return "|" + monthIndex;
    }
  }

  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return "S"; // Sunday
      case 1:
        return "M"; // Monday
      case 2:
        return "T"; // Tuesday
      case 3:
        return "W"; // Wednesday
      case 4:
        return "T"; // Thursday
      case 5:
        return "F"; // Friday
      case 6:
        return "S"; // Saturday

      default:
        return "";
    }
  }

  private createDay(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();

    day.monthIndex = monthIndex;
    day.monthName = this.getMonthName(monthIndex);

    day.dayNumber = dayNumber;
    day.year = year;

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    return day;
  }
}