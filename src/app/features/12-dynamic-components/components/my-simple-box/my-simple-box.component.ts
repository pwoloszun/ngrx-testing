import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nts-my-simple-box',
  templateUrl: './my-simple-box.component.html',
  styleUrls: ['./my-simple-box.component.css']
})
export class MySimpleBoxComponent implements OnInit {

  @Input() boxColor = '#0f0';

  ngOnInit(): void { }

}
