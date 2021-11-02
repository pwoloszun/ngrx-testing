import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'nts-inputs-change-handler-example',
  templateUrl: './inputs-change-handler-example.component.html',
  styleUrls: ['./inputs-change-handler-example.component.css']
})
export class InputsChangeHandlerExampleComponent implements OnInit, OnChanges {

  @Input()
  firstName!: string;

  @Input()
  currentAge!: number;

  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes:', changes);
  }

  ngOnInit(): void {
    console.log('on init:');
  }

}
