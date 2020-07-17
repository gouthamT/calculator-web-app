import { from, fromEvent } from "rxjs";
import { map, mapTo, mergeAll, merge, pluck } from 'rxjs/operators';

let stream$ = null;

const mapButtonEventListeners = btn =>  {
  return fromEvent(btn, 'click').pipe(mapTo(btn.getAttribute('data-operator-key')))
};

export const initObservables = () => {
  console.log('observables initialized');
  const actionButtons = document.getElementsByClassName("actionable-button");

  stream$ = from(actionButtons)
            .pipe(map(mapButtonEventListeners))
            .pipe(mergeAll())
            .pipe(merge(fromEvent(document, 'keypress').pipe(pluck('key'))));

  return stream$;
};