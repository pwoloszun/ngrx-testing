import { Component } from '@angular/core';
import { CounterValuesService } from '@app/core/api/counter-values.service';
import { select, Store } from '@ngrx/store';

import { selectors, actions } from '../../store/asyncCounter';

@Component({
  selector: 'nts-async-counter',
  templateUrl: './async-counter.component.html',
  styleUrls: ['./async-counter.component.css']
})
export class AsyncCounterComponent {

  id = 100; // DB entity ID

  value$ = this.store.pipe(
    select(selectors.selectAsyncCounterValue)
  );
  isLoading$ = this.store.pipe(
    select(selectors.selectAsyncCounterIsLoading)
  );

  constructor(private store: Store<any>,
    private counterValuesService: CounterValuesService

  ) {
  }

  increment() {
    this.store.dispatch(actions.incrementAsyncCounterRequest({ incBy: 10 }));
  }

  decrement() {
    this.store.dispatch(actions.decrementAsyncCounterRequest({
      id: this.id,
      decBy: 5,
    }));
  }

  reset() {
    // TODO
    this.counterValuesService.find(100).subscribe(
      (en) => console.log('ent', en),
      (err) => console.log('err', err)

    );
  }

}
