import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { MetaData } from './meta-data';

interface DataTableItem {
  [key: string]: any;
}

@Component({
  selector: 'nts-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

}
