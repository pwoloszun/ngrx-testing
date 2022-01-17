import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  // state - SINGLE SOURCE OF TRUTH
  people = [
    { id: 100, name: 'bob' },
    { id: 200, name: 'ed' },
    { id: 300, name: 'kate' },
    { id: 400, name: 'helen' },
  ];

  personClickHandler(person: any) {
    console.log('per:', person);
  }

}




// const ;
