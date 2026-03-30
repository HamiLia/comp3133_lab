import { Directive, ElementRef, HostListener } from '@angular/core';

// Lab 08 - Exercise #3
// Generated with: ng generate directive inputFormat
// Converts textbox text to UpperCase when the user clicks away (OnBlur event)
@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur')
  onBlur(): void {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
}
