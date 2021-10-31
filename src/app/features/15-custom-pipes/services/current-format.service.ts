import { Injectable } from '@angular/core';
import { findIndex, keys } from 'lodash';

const FORMATS_DICT = {
  iso: 'ISO',
  us: 'US',
  pl: 'PL',
};

const orderedFormatKeys = keys(FORMATS_DICT);

@Injectable({
  providedIn: 'root'
})
export class CurrentFormatService {

  private currFormatKey = orderedFormatKeys[0];

  get currentFormat(): string {
    return (FORMATS_DICT as any)[this.currFormatKey];
  }

  setFormat(formatKey: string): void {
    const format = (FORMATS_DICT as any)[formatKey];
    if (!format) {
      throw new Error(`Unknown format: ${formatKey}`);
    }
    this.currFormatKey = formatKey;
  }

  nextFormat(): void {
    const index = findIndex(orderedFormatKeys, (key) => key === this.currFormatKey);
    if (index < 0) {
      throw new Error(`Unknown current format key: ${this.currFormatKey}`);
    }
    const nextIndex = (index + 1) % orderedFormatKeys.length;
    const nextFormatKey = orderedFormatKeys[nextIndex];
    this.setFormat(nextFormatKey);
  }
}
