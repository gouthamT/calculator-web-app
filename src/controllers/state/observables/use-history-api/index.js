import  { useCallback } from 'react';
import { BehaviorSubject } from 'rxjs';
import { getPastTwoDaysHistory, updateLocalStorageHistory } from './local-storage-helper';
import { formatMessage } from './utils';

export const historySubject$ = new BehaviorSubject(getPastTwoDaysHistory());
const interimHistorySubject$ = new BehaviorSubject([]);

export const useHistoryApi = () => {
  const sendMessage = useCallback((message) => {
    const previousState = historySubject$.getValue();
    const nextState = [formatMessage(message), ...previousState];
    historySubject$.next(nextState);
    updateLocalStorageHistory(JSON.stringify(nextState));
    interimHistorySubject$.next([]);
  }, []);

  const onHandleInterimHistory = useCallback((previousState, computedResult, key) => {
    if(computedResult.next === null && computedResult.operation) {
      interimHistorySubject$.next([...interimHistorySubject$.getValue(), previousState]);
    }

    if(["=", "Enter"].includes(key)) {
      interimHistorySubject$.next([...interimHistorySubject$.getValue(), previousState]);
      interimHistorySubject$.next([...interimHistorySubject$.getValue(), computedResult]);
      sendMessage(interimHistorySubject$.getValue());
    }

    if(key === "AC") {
      interimHistorySubject$.next([]);
    }
  }, [sendMessage]);

  const clearHistory = useCallback(() => {
    historySubject$.next([]);
  }, []);

  return [{ subject$: historySubject$, onHandleInterimHistory, sendMessage, clearHistory }]
}