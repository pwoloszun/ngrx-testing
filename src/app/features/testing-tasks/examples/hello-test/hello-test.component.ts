import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'nts-hello-test',
  templateUrl: './hello-test.component.html',
  styleUrls: ['./hello-test.component.css']
})
export class HelloTestComponent implements OnInit {

  @Input()
  myName = '';
  message = '';

  myMessage2$ = of('Mary').pipe(
    delay(800)
  );

  ngOnInit(): void {
    setTimeout(() => {
      this.message = 'Kate';
    }, 800);
  }

}
