import React from 'react';
import './styled.css';

export const SquareRootExpression = ({ radicand, index }) => (
    <div className="square-root">
      <sup className="square-root__prefix">{index}</sup>
      <span>&#8730;</span>
      <span className="square-root__base">{radicand}</span>
    </div>
  );

export const PowerExpression = ({ base, exponent }) => (
    <div className="power">
      <span>{base}</span>
      <sup className="power__suffix">{exponent}</sup>
    </div>
  );

export const LogarithmExpression = ({ base, exponent }) => (
  <div className="logarithm">
    <span>{base}</span>
    <sup className="logarithm__suffix">{exponent}</sup>
  </div>
);