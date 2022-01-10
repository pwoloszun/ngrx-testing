import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
} from '@angular/core';

export interface TodoListItem {
  title: string;
  description?: string;
}

@Component({
  selector: 'nts-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent<T extends TodoListItem> implements OnInit {

  @Input() items!: T[];
  @Output() deleteItem = new EventEmitter<T>();

  itemClickHandler(item: T) {
    this.deleteItem.emit(item);
  }

  ngOnInit() { }
}
