import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'nts-my-mouse',
  templateUrl: './my-mouse.component.html',
  styleUrls: ['./my-mouse.component.css']
})
export class MyMouseComponent implements OnInit {

  @ContentChild(TemplateRef)
  template!: TemplateRef<any>;

  state = { x: 0, y: 0 }

  handleMouseMove(event: MouseEvent) {
    this.state = {
      x: event.clientX,
      y: event.clientY
    }
  }

  ngOnInit(): void {
  }

}
