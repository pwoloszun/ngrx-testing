import { map } from 'rxjs/operators';

type SelectorMappingFn = (state: any) => any;

export function expectStateChanges(
  store: any,
  expectedStateSnapshots: any[],
  selectorMappings: SelectorMappingFn,
  done: () => void
): void {
  let i = 0;
  const subscription = store.pipe(
    map(selectorMappings)
  ).subscribe((actualState: any) => {
    if (i >= expectedStateSnapshots.length) {
      throw new Error(`Unexpected state change`);
    }
    expect(actualState).toEqual(expectedStateSnapshots[i]);
    if (i >= expectedStateSnapshots.length - 1) {
      // subscription.unsubscribe();
      done();
    }
    i++;
  });
}
