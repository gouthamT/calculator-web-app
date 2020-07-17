import React, { useRef, useState, useEffect, useCallback } from 'react';
import { CalculatorView } from './ui';
import { calculate } from './common/utils';
import { initObservables } from './controllers';
import { ErrorBoundary } from './common/ui';
import './App.css';

const defaultState = {
  total: null,
  next: null,
  operation: null,
};

function App() {
  const stream$ = useRef();
  const stateRef = useRef(defaultState);
  const [displayValue, setDisplayValue]= useState(0);

  const handleEventsCallback = useCallback(key => {
    const state = stateRef.current;
    const computedResult = calculate(state, key);
    stateRef.current = {...state, ...computedResult};
    setDisplayValue(computedResult.total || computedResult.next)
  }, []);

  useEffect(() => {
        stream$.current = initObservables()
        stream$.current.subscribe(handleEventsCallback);
  }, [handleEventsCallback]);

  return (
    <ErrorBoundary>
      <div className="app">
        <CalculatorView value={displayValue} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
