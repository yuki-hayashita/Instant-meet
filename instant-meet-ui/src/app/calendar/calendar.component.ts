import { Component, OnInit, HostListener, ElementRef, Renderer2 } from "@angular/core";
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

  public isDragging = false;
  public isHovering = false;
  public toActive = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, public calendarCreatorService: CalendarCreatorService) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreatorService.getCurrentMonth());

    this.weekDaysName.push("M");
    this.weekDaysName.push("T");
    this.weekDaysName.push("W");
    this.weekDaysName.push("T");
    this.weekDaysName.push("F");
    this.weekDaysName.push("S");
    this.weekDaysName.push("S");

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

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;

    const target = event.target as HTMLElement;
      if (target.classList.contains('day')) {
        if (target.classList.contains('active')) {
          this.toActive = false;
          target.classList.remove('active');
        }else {
          this.toActive = true;
          target.classList.add('active');
        }
      }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    event.preventDefault();
    this.isHovering = true;
    const target = event.target as HTMLElement;
    if (target.tagName == 'BUTTON') {
      if (target.className == 'previous') {
        this.onPreviousMonth();
      } 
      if (target.className == 'next') {
        this.onNextMonth();
      } 
    } else {
      if (target.classList.contains('day')) {
        if (target.classList.contains('active')) {
          this.toActive = false;
          target.classList.remove('active');
        }else {
          this.toActive = true;
          target.classList.add('active');
        }
      }
    }
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.isHovering = false;
  }

  @HostListener('touchmove', ['$event'])
onTouchMove(event: TouchEvent) {
  if (this.isHovering) {
    // const target= event.touches[0]as HTMLElement;
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    const target = document.elementFromPoint(x, y) as HTMLElement;
    console.log(target)

    if (this.toActive && !target.classList.contains('active')) {
      console.log("adding active")
      target.classList.add('active');
    } 

    if (!this.toActive && target.classList.contains('active')) {
      target.classList.remove('active');
    }
  }
}

}