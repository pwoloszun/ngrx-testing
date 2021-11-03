import { Pipe, PipeTransform } from '@angular/core';

import { CurrentFormatService } from '../services/current-format.service';

const dateFormatters = {
  'US': function (date: Date): string {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear() % 1000}`;
  },

  'ISO': function (date: Date): string {
    return date.toISOString().slice(0, 10);
  },

  'PL': function (date: Date): string {
    const iso = date.toISOString().slice(0, 10);
    const dd = iso.slice(-2);
    const mm = iso.slice(5, 7);
    const yyyy = iso.slice(0, 4);
    return `${dd}.${mm}.${yyyy}`;
  }
};

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: Date | null, locale: string): string | null {
    // TODO
    return null;
  }

}
