import { ButtonConfigurations } from './index';

describe('ButtonConfigurations', () => {
  test('ButtonConfigurations should match snapshot', () => {
    expect(ButtonConfigurations).toMatchSnapshot();
  })
})