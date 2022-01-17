import { Component, OnInit } from '@angular/core';


function selectBtnCssClasses(isVisible: boolean): any {
  return isVisible ? { 'mat-primary': true } : { 'mat-warn': true };
}

@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {

  // state primary/essential
  isVisible = true;

  // state derived/computed
  get btnCssClasses(): any {
    return selectBtnCssClasses(this.isVisible);
  }

  get btnText(): string {
    return this.isVisible ? 'Toggle Hide' : 'Toggle Show';
  }

  toggleClickHandler() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {
  }

}
