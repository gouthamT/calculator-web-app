import React from 'react';
import { useStore } from './controllers';
import { ErrorBoundary } from './common/ui';
import { ResultView, ButtonList, HistoryView } from './ui';
import './App.css';

const App = () =>  {
  const [displayValue] = useStore();

  return (
    <ErrorBoundary>
      <div className="app">
        <div className="calculator">
          <ResultView value={displayValue} />
          <ButtonList />
        </div>
        <HistoryView />
      </div>
    </ErrorBoundary>
  );
}

export default App;
