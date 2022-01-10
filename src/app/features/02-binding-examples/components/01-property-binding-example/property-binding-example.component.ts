import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-property-binding-example',
  templateUrl: './property-binding-example.component.html',
})
export class PropertyBindingExampleComponent implements OnInit {

  bob = { name: 'Uncle Bob', sex: 'M' };

  myPrimitive = true;


  isBtnDisabled!: boolean;
  url!: string;


  ngOnInit() {
    this.isBtnDisabled = true;
    this.url = 'http://www.mememaker.net/static/images/memes/4572301.jpg';

    setTimeout(() => {
      this.bob.name = `batman22`;
    }, 2000);
  }
}
