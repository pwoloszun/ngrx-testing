import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nts-hello-test',
  templateUrl: './hello-test.component.html',
  styleUrls: ['./hello-test.component.css']
})
export class HelloTestComponent implements OnInit {

  @Input()
  myName = '';

  ngOnInit(): void {
  }

}
