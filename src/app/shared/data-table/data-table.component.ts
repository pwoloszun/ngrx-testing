import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Hero } from '@app/core/api/models/hero.model';

import { MetaData } from './meta-data';

interface IDataTableItem {
  id: number | string;
  [key: string]: any;
}

@Component({
  selector: 'nts-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent<T extends IDataTableItem> {

  @Input() items: T[] = [];
  @Input() selectedItem: T | null = null;
  @Input() metaData: MetaData[] = [];

  @Output() itemClick = new EventEmitter<T>();

  rowClickHandler(item: T) {
    this.itemClick.emit(item);
  }

}
