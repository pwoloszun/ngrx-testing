import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Hero } from '@app/core/api/models/hero.model';

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

  @Input() items: Hero[] = [];

  @Input() selectedItem: Hero | null = null;

  @Output() itemClick = new EventEmitter<Hero>();

  rowClickHandler(item: Hero) {
    this.itemClick.emit(item);
  }

}
