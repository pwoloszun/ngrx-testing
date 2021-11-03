import { Component, OnInit } from '@angular/core';
import { CurrentFormatService } from '../../services/current-format.service';

@Component({
  selector: 'nts-pipe-examples-page',
  templateUrl: './pipe-examples-page.component.html',
  styleUrls: ['./pipe-examples-page.component.css']
})
export class PipeExamplesPageComponent implements OnInit {

  jsonData = {
    'name': 'imba!',
    age: null,
    rows: [
      { id: 1, serialNo: 'xxx' },
      { id: 2, serialNo: 'yyy' },
      { id: 3, serialNo: 'zzz' }
    ]
  };
  message = '';
  m1!: number;
  m2!: number;
  nowDt = new Date();

  people = [
    { name: 'bob', age: 34 },
    { name: 'ed', age: 12 },
    { name: 'kate', age: 56 },
  ];

  get currentFormat() {
    return this.currFormatService.currentFormat;
  }

  tmpValue = 10;
  animateValue = 0;

  constructor(private currFormatService: CurrentFormatService) { }

  toggleFormat() {
    this.currFormatService.nextFormat();
  }

  animate() {
    this.animateValue = this.tmpValue;
  }

  ngOnInit() {
  }

}
