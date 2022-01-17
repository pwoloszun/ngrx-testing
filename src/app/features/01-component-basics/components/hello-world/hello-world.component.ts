import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  // state - SINGLE SOURCE OF TRUTH
  myData = `batman!! ${Math.random()}`;

  person = {
    name: 'bob',
    age: 123,
    children: [{ name: 'kate' }]
  };

  photoUrl = 'http://costam.jpg';

  constructor() {
    setTimeout(() => {
      this.person.children[0].name = `catlyn ${Math.random()}`;
    }, 2000);
  }

}




// const people = [
//   { id: 100, name: 'bob' },
//   { id: 200, name: 'ed' },
//   { id: 300, name: 'kate' },
//   { id: 400, name: 'helen' },
// ];
