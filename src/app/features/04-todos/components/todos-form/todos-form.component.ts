import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  titleTmp = '';
  descriptionTmp = '';

  submitHandler() {
    this.createItem.emit({
      title: this.titleTmp,
      description: this.descriptionTmp,
    });
  }

  ngOnInit() {
  }

}
