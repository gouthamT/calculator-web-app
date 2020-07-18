import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ButtonConfigurationsMap } from './common/configurations';
import { act } from 'react-dom/test-utils';
import App from './App';

test('should match all configured buttons', () => {
  const { getByTestId } = render(<App />);

  expect(ButtonConfigurationsMap.size).toBe(49);
  ButtonConfigurationsMap.forEach((_, key) => {
    expect(getByTestId(`btn-${key}`)).toMatchSnapshot();
  });
});

test('should have results view', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId(`input-box`).value).toBe("0");
});

test('should have history view', () => {
  const { findByTestId } = render(<App />);

  expect(findByTestId(`histories`)).not.toBeNull();
});

test('should perform addition operation and update state', async () => {
  const { getByTestId } = render(<App />);
  await act(async () => {
    fireEvent.click(getByTestId('btn-3'))
    fireEvent.click(getByTestId('btn-+'))
    fireEvent.click(getByTestId('btn-5'))
    fireEvent.click(getByTestId('btn-='))
  })

  expect(getByTestId(`input-box`).value).toBe("8");
});

test('should perform subtraction operation and update state', async () => {
  const { getByTestId } = render(<App />);
  await act(async () => {
    fireEvent.click(getByTestId('btn-8'))
    fireEvent.click(getByTestId('btn--'))
    fireEvent.click(getByTestId('btn-5'))
    fireEvent.click(getByTestId('btn-='))
  })

  expect(getByTestId(`input-box`).value).toBe("3");
});

test('should perform multiplication operation and update state', async () => {
  const { getByTestId } = render(<App />);
  await act(async () => {
    fireEvent.click(getByTestId('btn-8'))
    fireEvent.click(getByTestId('btn-x'))
    fireEvent.click(getByTestId('btn-5'))
    fireEvent.click(getByTestId('btn-='))
  })

  expect(getByTestId(`input-box`).value).toBe("40");
});

test('should perform division operation and update state', async () => {
  const { getByTestId } = render(<App />);
  await act(async () => {
    fireEvent.click(getByTestId('btn-2'))
    fireEvent.click(getByTestId('btn-0'))
    fireEvent.click(getByTestId('btn-0'))
    fireEvent.click(getByTestId('btn-÷'))
    fireEvent.click(getByTestId('btn-5'))
    fireEvent.click(getByTestId('btn-='))
  })

  expect(getByTestId(`input-box`).value).toBe("40");
});

test('should perform multiple operations and update state', async () => {
  const { getByTestId } = render(<App />);
  await act(async () => {
    fireEvent.click(getByTestId('btn-1'))
    fireEvent.click(getByTestId('btn-+'))
    fireEvent.click(getByTestId('btn-2'))
    fireEvent.click(getByTestId('btn-x'))
    fireEvent.click(getByTestId('btn-3'))
    fireEvent.click(getByTestId('btn-÷'))
    fireEvent.click(getByTestId('btn-4'))
    fireEvent.click(getByTestId('btn-='))
  })

  expect(getByTestId(`input-box`).value).toBe("2.25");
});