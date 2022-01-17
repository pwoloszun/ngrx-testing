import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const defaultLabel = 'Choose from:';

export interface IOptionPickerOption {
  id: number;
  value: string;
}

@Component({
  selector: 'nts-option-picker',
  templateUrl: './option-picker.component.html',
  styleUrls: ['./option-picker.component.css']
})
export class OptionPickerComponent implements OnInit {

  @Input() label!: string;
  @Input() options: IOptionPickerOption[] = [];

  ngOnInit() {
  }
}
