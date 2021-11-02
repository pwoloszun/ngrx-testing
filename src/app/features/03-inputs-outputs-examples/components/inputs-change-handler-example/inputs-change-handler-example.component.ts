import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'nts-inputs-change-handler-example',
  templateUrl: './inputs-change-handler-example.component.html',
  styleUrls: ['./inputs-change-handler-example.component.css']
})
export class InputsChangeHandlerExampleComponent implements OnInit, OnChanges {

  private _firstName = '';

  @Input()
  set firstName(nextFirstName: string) {
    this._firstName = nextFirstName;
  };

  get firstName(): string {
    return this._firstName;
  }

  @Input()
  currentAge!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.firstName && !changes.firstName.isFirstChange) {

    }

    if (changes.currentAge && !changes.currentAge.isFirstChange) {

    }

    console.log('on changes:', changes);
  }

  ngOnInit(): void {
    console.log('on init:');
  }

}
