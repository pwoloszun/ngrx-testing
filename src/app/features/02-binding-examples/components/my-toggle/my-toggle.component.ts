import { Component, OnInit } from '@angular/core';


const selectCssClass = (isVisible: boolean) => {
  if (isVisible) {
    return { 'mat-warn': true };
  } else {
    return { 'mat-primary': true };
  }
};


@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {
  // primary/essential state
  isVisible = true;

  // derived/computed state
  get cssClasses() {
    return selectCssClass(this.isVisible);
  }

  get btnText() {
    if (this.isVisible) {
      return 'Toggle Hide';
    } else {
      return 'Toggle Show';
    }
  }

  toggleHandler() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {
  }

}
