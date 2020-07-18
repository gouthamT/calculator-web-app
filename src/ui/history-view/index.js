import React, { useRef, useState, useEffect } from 'react';
import { useHistoryApi } from '../../controllers';
import './styled.css';

const SingleCalculationHistory = ({drillDown, total}) => (
  <li data-testid="history-item">
    <p className="light-grey-font">{drillDown} = </p>
    <p>{total}</p>
  </li>
)

export const HistoryView = () =>  {
  const streamSubscriptionRef = useRef();
  const [ history, setHistory ] = useState([]);
  const [{ subject$ }] = useHistoryApi();

  useEffect(() => {
    streamSubscriptionRef.current = subject$.subscribe(setHistory);
    return () => {
      streamSubscriptionRef.current.unsubscribe();
    }
  }, [subject$]);

  return (
    <div className="histories" data-testid="histories">
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
