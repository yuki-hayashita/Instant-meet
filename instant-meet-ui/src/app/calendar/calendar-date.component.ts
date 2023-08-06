import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calendar-date',
  template: '<span class="day" #dateElement>{{ date }}</span>',
  styleUrls: ["./calendar-date.component.scss"],
})
export class CalendarDateComponent {
  @Input() date: number | undefined;
  @Input() isDragging: boolean = false;
  @Input() toActive: boolean = false;
  @Input() isHovering: boolean = false;
  @ViewChild('dateElement') dateElement!: ElementRef<HTMLSpanElement>;

  @HostListener('mouseenter')
  @HostListener('touchstart', ['$event'])
  onPointerEnter(event?: TouchEvent) {
      if (event) {
        // event.preventDefault();
        // this.handleTouch(event);
      } else {
    if (this.isDragging) {
        const target: HTMLElement = this.dateElement.nativeElement;

        if (this.toActive && !target.classList.contains('active')) {
          target.classList.add('active');
        } 

        if (!this.toActive && target.classList.contains('active')) {
          target.classList.remove('active');
        }
      }
    
  }
}

// @HostListener('touchstart', ['$event'])
// onTouchStart(event: TouchEvent) {
//   event.preventDefault();
//   console.log(event.target)
// }

// @HostListener('touchend', ['$event'])
// onTouchEnd(event: TouchEvent) {
//   console.log(event.target)
// }


// private handleTouch(event: TouchEvent) {
//   const touch = event.touches[0];
//   const target = this.dateElement.nativeElement;

//   console.log(target)

//   if (this.toActive && !target.classList.contains('active')) {
//     target.classList.add('active');
//   }

//   if (!this.toActive && target.classList.contains('active')) {
//     target.classList.remove('active');
//   }
// }

}
