import React from 'react';
import './styled.css';

export const ResultView = ({ value }) => (
  <input data-testid="input-box" type="text" readOnly className="result-view" value={value || 0} />
);