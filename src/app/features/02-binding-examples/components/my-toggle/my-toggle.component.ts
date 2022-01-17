import { Component, OnInit } from '@angular/core';

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
    return this.isVisible ? { 'mat-primary': true } : { 'mat-warn': true };
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
