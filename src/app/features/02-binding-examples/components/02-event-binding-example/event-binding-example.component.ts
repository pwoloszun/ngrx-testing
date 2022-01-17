import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-event-binding-example',
  templateUrl: './event-binding-example.component.html',
  styleUrls: ['./event-binding-example.component.css']
})
export class EventBindingExampleComponent implements OnInit {

  value = 0;

  increment() {
    console.log('inc:',);
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  ngOnInit() {
  }
}
