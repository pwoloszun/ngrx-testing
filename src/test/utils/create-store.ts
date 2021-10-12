import { TestBed } from '@angular/core/testing';
import { Actions, EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

export function createStore<T>(reducers: any = {}, effects: any[] = [], providers: any[] = [], imports: any[] = []) {
  const metaReducers: any[] = [];

  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          // strictStateImmutability: true,
          // strictActionImmutability: true,
        }
      }),
      EffectsModule.forRoot(effects),
      ...imports
    ],
    providers: [
      Store,
      Actions,
      ...providers,
    ],
  });

  return TestBed.get<Store<T>>(Store);
}
