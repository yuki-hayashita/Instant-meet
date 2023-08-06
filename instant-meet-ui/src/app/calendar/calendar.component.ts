import { Component, OnInit,HostListener, ElementRef, Renderer2, ViewChildren } from "@angular/core";
import { CalendarCreatorService } from "../service/calendar-creator.service";
import { Day } from "../model/day.model";
import { set } from "date-fns";
import { CalendarDateComponent } from "./calendar-date.component";

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
  public selectedDates = new Set<string>()

  public isDragging = false;
  public isHovering = false;
  public toActive = false;

  @ViewChildren(CalendarDateComponent) childComponents;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, public calendarCreatorService: CalendarCreatorService) { }

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreatorService.getCurrentMonth());

    this.weekDaysName.push("S");
    this.weekDaysName.push("M");
    this.weekDaysName.push("T");
    this.weekDaysName.push("W");
    this.weekDaysName.push("T");
    this.weekDaysName.push("F");
    this.weekDaysName.push("S");
  }


  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarCreatorService.getMonth(this.monthNumber, this.year));
    this.onPageChange()
  }

  onPreviousMonth(): void {
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarCreatorService.getMonth(this.monthNumber, this.year));
    this.onPageChange()
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
        this.removeFromSelectedDates(target)
      } else {
        this.toActive = true;
        this.addToSelectedDates(target)
      }
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseEnter(event: MouseEvent) {
    if (this.isDragging) {
      const target = event.target as HTMLElement;

      if (this.toActive && !target.classList.contains('active')) {
        this.addToSelectedDates(target)
      }

      if (!this.toActive && target.classList.contains('active')) {
        this.removeFromSelectedDates(target)
      }
    }

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
          this.removeFromSelectedDates(target)
        } else {
          this.toActive = true;
          this.addToSelectedDates(target)
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

      if (this.toActive && !target.classList.contains('active')) {
        this.addToSelectedDates(target)
      }

      if (!this.toActive && target.classList.contains('active')) {
        this.removeFromSelectedDates(target)
      }
    }
  }

  addToSelectedDates(target: HTMLElement) {
    const dayNumberAttribute = target.getAttribute('dayNumber')
    if (target.classList.contains('day') && dayNumberAttribute) {
      const dayIndex = parseInt(dayNumberAttribute, 10);
      const dayString = String(dayIndex).padStart(2, '0')
      const monthString = String(this.monthNumber+1).padStart(2, '0')
      const selected = this.year + "-" + monthString + "-" + dayString;
      this.selectedDates.add(selected)
      target.classList.add('active');
      console.log(target)
    }
  }

  removeFromSelectedDates(target: HTMLElement) {
    const dayNumberAttribute = target.getAttribute('dayNumber')
    if (target.classList.contains('day') && dayNumberAttribute) {
      const dayIndex = parseInt(dayNumberAttribute, 10);
      const dayString = String(dayIndex).padStart(2, '0')
      const monthString = String(this.monthNumber+1).padStart(2, '0')
      const selected = this.year + "-" + monthString + "-" + dayString;
      this.selectedDates.delete(selected)
      target.classList.remove('active');
    }
  }

  onPageChange() {
    const monthString = String(this.monthNumber+1).padStart(2, '0')
    this.childComponents.forEach((childComponent: CalendarDateComponent) => {
      const childElement: HTMLElement = childComponent.dateElement.nativeElement;
      const dayNumberAttribute = childElement.getAttribute('dayNumber')
      const dayIndex = parseInt(dayNumberAttribute, 10);
      const dayString = String(dayIndex).padStart(2, '0')
      const date = this.year + "-" + monthString + "-" + dayString;
      if (this.selectedDates.has(date)) {
        this.addToSelectedDates(childElement);
        // // this.renderer.removeClass(childElement, 'active');
        // this.renderer.addClass(childElement, 'active');
        // console.log(childElement)
      }
      // console.log(childElement.getAttribute('dayNumber'))
    });
  }
}