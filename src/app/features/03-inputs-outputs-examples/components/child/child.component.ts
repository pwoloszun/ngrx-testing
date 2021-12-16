import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import produce from 'immer';

@Component({
  selector: 'nts-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() textMessage!: string;
  @Input() readonly myData!: any;

  @Output() messageSent = new EventEmitter<string>();

  childText!: string;

  sendMessageHandler() {
    this.messageSent.emit(this.childText);
  }

  ngOnInit() {
  }
}

// const data = {
//   value: 456,
//   gggHhh: {
//     friends: [
//       { name: 'qq' },
//       { name: 'qq' },
//       { name: 'qq' } // ===

//     ]
//   }
// };

// // encapsulation
// function myPRoduce<T>(value:T, mutationsFn: (draft:T) => void):T {
//   const cpy =  deepClone(value);
//   mutationsFn(cpy)
//   return cpy;
// }

// const dataCpy = {
//   ...data,
//   value: 123,
//   friends: [...data.friends]
// }



// function ggg(a: { value: number; friends: { name: string; }[] }) {
//   a.value = 123;
//   const aCpy = produce(a, (draft) => {
//     draft.value = 123;
//     draft.friends[1].name = ' bobob';
//   });

//   return a.value + 10;
// }

// ggg(data);
