import React from 'react';
import { ResultView } from './result-view';
import { ButtonList } from './button-list';
import { HistoryView } from './history-view';

export const CalculatorView = ({ value }) => {
  return (
    <>
      <div className="calculator">
        <ResultView value={value} />
        <ButtonList />
      </div>
      <HistoryView />
    </>
  );
}