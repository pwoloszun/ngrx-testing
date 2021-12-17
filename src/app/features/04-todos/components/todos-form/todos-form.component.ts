import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cloneDeep } from 'lodash';

export interface TodoFormVm {
  title: string;
  description?: string;
}

@Component({
  selector: 'nts-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  @Output()
  createItem = new EventEmitter<TodoFormVm>();

  formValues: TodoFormVm = {
    title: '',
    description: ''
  };

  submitHandler() {
    // validations
    const formValuesCpy = cloneDeep(this.formValues);
    this.createItem.emit(formValuesCpy);
  }

  ngOnInit() {
  }

}
