import React from 'react';
import { CalculatorView } from './ui';
import { useStore } from './controllers';
import { ErrorBoundary } from './common/ui';
import './App.css';

const App = () =>  {
  const [displayValue] = useStore();

  return (
    <ErrorBoundary>
      <div className="app">
        <CalculatorView value={displayValue} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
