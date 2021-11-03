import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
}

@Component({
  selector: 'nts-tmpl-example',
  templateUrl: './tmpl-example.component.html',
})
export class TmplExampleComponent implements OnInit {

  person!: Person;

  ngOnInit(): void {
    setTimeout(() => {
      this.person = { name: 'Bob' };
    }, 2000);
  }

}
