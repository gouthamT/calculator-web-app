import  { useRef, useState, useEffect, useCallback } from 'react';
import { calculate } from '../../common/utils';
import { initUserInteractionObservable, useHistoryApi } from './observables';

const defaultState = {
  total: null,
  next: null,
  operation: null,
};

export const useStore = () => {
  const stream$ = useRef();
  const streamSubscriptionRef = useRef();
  const stateRef = useRef(defaultState);
  const [{ onHandleInterimHistory }] = useHistoryApi();
  const [displayValue, setDisplayValue]= useState(0);

  const onHandleEventsCallback = useCallback(key => {
    const previousState = stateRef.current;
    const computedResult = { ...previousState, ...calculate(previousState, key) };
    stateRef.current = computedResult;
    onHandleInterimHistory(previousState, computedResult, key);
    setDisplayValue(computedResult.next || computedResult.total);
  }, [onHandleInterimHistory]);

  useEffect(() => {
        stream$.current = initUserInteractionObservable();
        streamSubscriptionRef.current = stream$.current.subscribe(onHandleEventsCallback);
        return () => {
          streamSubscriptionRef.current.unsubscribe();
        }
  }, [onHandleEventsCallback]);

  return [displayValue]
};


export { useHistoryApi, historySubject$ } from './observables';