import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import 'dayjs/locale/en';

dayjs.extend(utc);

export function setupTime() {
  dayjs().locale('en');
}
