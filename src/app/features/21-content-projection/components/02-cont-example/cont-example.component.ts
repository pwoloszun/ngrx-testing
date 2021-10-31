import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-cont-example',
  templateUrl: './cont-example.component.html',
})
export class ContExampleComponent implements OnInit {

  people = [
    { id: 100, name: 'bob', age: 123 },
    { id: 200, name: 'ed', age: 456 },
    { id: 300, name: 'kate', age: 333 },
    { id: 400, name: 'mary', age: 4444 },
  ];

  ngOnInit(): void {
  }

}
