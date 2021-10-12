import { TestBed } from '@angular/core/testing';
import { Actions, EffectsModule } from '@ngrx/effects';
import { Store, StoreModule, Action } from '@ngrx/store';

interface ReducersDict {
  [sliceId: string]: (state: any | undefined, action: Action) => any;
}

export function createStore<TAppState>(
  reducers: ReducersDict = {},
  effects: any[] = [],
  providers: any[] = [],
  imports: any[] = []
) {
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

  return TestBed.inject<Store<TAppState>>(Store);
}
