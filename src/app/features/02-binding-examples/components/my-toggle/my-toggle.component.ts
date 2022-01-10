import { Component, OnInit } from '@angular/core';

function selectButtonText(isVisible: boolean): string {
  return isVisible ? 'Toggle Hide' : 'Toggle Show';
}

@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {

  // primary/essential state
  isVisible = true;

  // derived/computed state
  get btnText(): string {
    return selectButtonText(this.isVisible);
  }

  get cssClass(): any {
    return this.isVisible ? { 'mat-primary': true } : { 'mat-warn': true };
  }

  toggleHandler() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() { }

}
