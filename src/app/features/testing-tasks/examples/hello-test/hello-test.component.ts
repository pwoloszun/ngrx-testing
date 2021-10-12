import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output()
  btnClick = new EventEmitter<string>();

  myMessage2$ = of('Mary').pipe(
    delay(800)
  );

  handleMySubmitClick() {
    this.btnClick.emit(`a qq!`);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.message = 'Kate';
    }, 800);
  }

}
