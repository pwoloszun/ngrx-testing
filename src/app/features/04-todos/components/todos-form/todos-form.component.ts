import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface TodoFormValues {
  title: string;
  description: string;
}

@Component({
  selector: 'nts-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  titleTmp = '';
  descriptionTmp = '';

  @Output() createItem = new EventEmitter<TodoFormValues>();

  submitHandler() {
    const params: TodoFormValues = {
      title: this.titleTmp,
      description: this.descriptionTmp
    };
    this.createItem.emit(params);
  }

  ngOnInit() {
  }

}
