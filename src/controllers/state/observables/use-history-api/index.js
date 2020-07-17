import  { useCallback } from 'react';
import { BehaviorSubject } from 'rxjs';
import { formatMessage } from './utils';

const historySubject$ = new BehaviorSubject([]);
const interimHistorySubject$ = new BehaviorSubject([]);

export const useHistoryApi = () => {
  const sendMessage = useCallback((message) => {
    const previousState = historySubject$.getValue();
    historySubject$.next([formatMessage(message), ...previousState]);
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