import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {

  // state
  isVisible = true;
  btnCssClasses: any = { 'mat-primary': true };
  btnText = 'Toggle Hide';

  toggleClickHandler() {
    if (this.isVisible) {
      this.isVisible = false;
      this.btnCssClasses = { 'mat-warn': true };
      this.btnText = 'Toggle Show';
    } else {
      this.isVisible = true;
      this.btnCssClasses = { 'mat-primary': true };
      this.btnText = 'Toggle Hide';
    }
  }

  ngOnInit() {
  }

}
