import React from 'react';
import { SCIENTIFIC, NUMBER, ARITHMETIC } from '../../common/constants';
import './styled.css';

export const Button = ({ btnConfig }) => {
  const styles = ["button"];
  const { label, key: buttonKey, operatorType, className }= btnConfig;

  switch(operatorType) {
    case NUMBER: styles.push("actionable-button white bg-light-grey"); break;
    case SCIENTIFIC: styles.push("scientific white bg-dark-grey"); break;
    case ARITHMETIC: styles.push("actionable-button pure-white bg-orange"); break;
    default: styles.push("actionable-button bg-grey");
  }

  styles.push(className);

   return <button className={styles.join(" ")} data-operator-key={buttonKey}>{label}</button>;
};