import { Pipe, PipeTransform } from '@angular/core';

// Lab 08 - Exercise #2
// Generated with: ng generate pipe remove-spaces
// Replaces any occurrence of a dash '-' with an empty space
@Pipe({
  name: 'removeSpaces',
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    return value.replace(/-/g, ' ');
  }
}
