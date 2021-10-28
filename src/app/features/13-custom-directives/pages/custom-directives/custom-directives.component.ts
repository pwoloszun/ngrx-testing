import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

  deayInMs = 1500;
  isVisible = true;
  people: any[] = [];
  tooltipText = `Hello everybody!`;

  ngOnInit() {
    // this.asyncSetDelayInMs(1500);

    setTimeout(() => {
      this.people = [
        { id: 100, name: 'bob' },
        { id: 200, name: 'ed' },
        { id: 300, name: 'kate' },
        { id: 400, name: 'mary' },
      ];
    }, 2800);
  }

  toggleVisibilityHandler() {
    this.isVisible = !this.isVisible;
  }

  private asyncSetDelayInMs(nextDelay: number) {
    setTimeout(() => {
      console.log('changeDelayInMs');
      this.deayInMs = nextDelay;
    }, 3000);
  }

}
