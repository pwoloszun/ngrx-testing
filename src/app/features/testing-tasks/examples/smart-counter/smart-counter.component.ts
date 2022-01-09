import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { CounterApiService } from '../../services/counter-api.service';

@Component({
  selector: 'nts-smart-counter',
  templateUrl: './smart-counter.component.html',
})
export class SmartCounterComponent implements OnInit {

  private id = 100;

  tmpVal: number | null = null;

  constructor(private counterApi: CounterApiService) { }

  incrementHandler() {
    if (this.tmpVal === null) {
      return;
    }
    this.counterApi.update(this.id, {
      value: this.tmpVal + 10
    }).subscribe((dto) => {
      this.tmpVal = dto.value;
    });
  }

  ngOnInit(): void {
    this.counterApi.getById(this.id)
      .subscribe((dto) => {
        this.tmpVal = dto.value;
      });
  }

}
