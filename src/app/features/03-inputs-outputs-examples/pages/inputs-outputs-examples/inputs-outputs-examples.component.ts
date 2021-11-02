import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-inputs-outputs-examples',
  templateUrl: './inputs-outputs-examples.component.html',
})
export class InputsOutputsExamplesComponent implements OnInit {

  person = { name: 'bob', age: 123 };

  ngOnInit() {
    setTimeout(() => {
      this.person.name = `Batman!!`;
    }, 2000);

    setTimeout(() => {
      this.person = { name: 'Ed', age: 456 };
    }, 5000);
  }

}
