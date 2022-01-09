import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nts-pure-counter',
  templateUrl: './pure-counter.component.html',
  styleUrls: ['./pure-counter.component.css']
})
export class PureCounterComponent implements OnInit {

  @Input() value!: number | null;
  @Output() increment = new EventEmitter<void>();

  incrementBtnHandler() {
    this.increment.emit();
  }

  ngOnInit(): void {
  }

}
