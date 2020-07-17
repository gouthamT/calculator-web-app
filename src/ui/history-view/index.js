import React, { useState, useEffect } from 'react';
import { useHistoryApi } from '../../controllers';
import './styled.css';

const SingleCalculationHistory = ({drillDown, total}) => (
  <li>
    <p className="light-grey-font">{drillDown} = </p>
    <p>{total}</p>
  </li>
)

export const HistoryView = () =>  {
  const [ history, setHistory ] = useState([]);
  const [{ subject$ }] = useHistoryApi();

  useEffect(() => {
    subject$.subscribe(e => {
      setHistory(e);
    })
  }, [subject$]);

  return (
    <div className="histories">
      <ul className="history--tabs">
        <li>History</li>
        <li className="light-grey-font">Memory</li>
      </ul>
      <ul className="history--list">
        {
          history.map((data, key) => <SingleCalculationHistory key={key} {...data} />)
        }
      </ul>
    </div>
  );
}
