import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value1: number, value2: number): number | null {
    if (value1 == null || value2 == null) {
      return null;
    } else {
      return value1 * value2;
    }
  }

}

