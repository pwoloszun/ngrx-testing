import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {
  // css classes
  // 'mat-primary'
  // 'mat-warn'

  // state
  isVisible = true;
  cssClasses: any = { 'mat-primary': true };
  btnText = 'Toggle Hide';

  toggleHandler() {
    if (this.isVisible) {
      this.isVisible = false;
      this.cssClasses = { 'mat-warn': true };
      this.btnText = 'Toggle Show';
    } else {
      this.isVisible = true;
      this.cssClasses = { 'mat-primary': true };
      this.btnText = 'Toggle Hide';
    }
  }

  // TODO
  ngOnInit() {
  }

}
