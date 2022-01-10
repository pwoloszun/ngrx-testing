import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {

  // state
  isVisible = true;
  btnText = 'Toggle Hide';
  cssClass = {
    'mat-primary': true,
    'mat-warn': false
  };

  toggleHandler() {
    if (this.isVisible) {
      this.isVisible = false;
      this.btnText = 'Show Text';
      this.cssClass = {
        'mat-primary': false,
        'mat-warn': true
      }
    } else {
      this.isVisible = true;
      this.btnText = 'Hide Text';
      this.cssClass = {
        'mat-primary': true,
        'mat-warn': false
      }
    }
  }

  // css classes: 'mat-warn', 'mat-primary'

  ngOnInit() { }

}
