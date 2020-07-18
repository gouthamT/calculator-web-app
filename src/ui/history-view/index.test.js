import React from 'react';
import { render } from '@testing-library/react';
import { historySubject$ } from '../../controllers';
import { act } from 'react-dom/test-utils';
import { HistoryView } from './index';

test('should render single history', async () => {
  const { queryAllByTestId } = render(<HistoryView />);
  await act(async () => {
     await historySubject$.next([{drillDown: 'test-message', total: '0'}]);
  })
  const items = queryAllByTestId('history-item');
  expect(items).toHaveLength(1);
});

test('should render multiple histories', async () => {
  const { queryAllByTestId } = render(<HistoryView />);
  await act(async () => {
    await historySubject$.next([{drillDown: 'test-message-1', total: '1'}]);
    await historySubject$.next([{drillDown: 'test-message-2', total: '2'}, {drillDown: 'test-message-1', total: '1'}]);
    await historySubject$.next([{drillDown: 'test-message-3', total: '3'}, {drillDown: 'test-message-2', total: '2'}, {drillDown: 'test-message-1', total: '1'}]);
  })
  const items = queryAllByTestId('history-item');
  expect(items).toHaveLength(3);
});