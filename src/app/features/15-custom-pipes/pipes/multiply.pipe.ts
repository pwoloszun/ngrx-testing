import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value1: number | null, value2: number | null): number | null {
    // TODO
    return null;
  }

}

