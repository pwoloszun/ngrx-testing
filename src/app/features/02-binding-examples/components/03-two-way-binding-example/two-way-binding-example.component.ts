import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-two-way-binding-example',
  templateUrl: './two-way-binding-example.component.html',
  styleUrls: ['./two-way-binding-example.component.css']
})
export class TwoWayBindingExampleComponent implements OnInit {

  // state
  message: any;
  types: string[] = [];

  messageChangeHandler($event: string) {
    this.message.text = $event.toUpperCase();
  }

  ngOnInit(): void {
    this.types = [
      'Private',
      'Public',
      'Top secret'
    ];

    this.message = {
      text: 'abcd',
      type: this.types[0]
    };

    setTimeout(() => {
      this.message.text = 'a qqqqq!!!!!';
    }, 2000);
  }

}
