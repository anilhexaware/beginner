import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, code: string): string {
    if (code === 'NY') {
      return 'The BIG Apple';
    } else {
      return 'Garden City';
    }
  }
}
