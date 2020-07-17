import React from 'react';
import { ResultView } from './result-view';
import { ButtonList } from './button-list';

export const CalculatorView = ({ value }) => {
  return (
    <div className="calculator">
      <ResultView value={value} />
      <ButtonList />
    </div>
  );
}