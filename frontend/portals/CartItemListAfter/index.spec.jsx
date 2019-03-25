import React from 'react';
import { mount } from 'enzyme';

jest.mock('../../components/Checkboxes', () => () => <div>Mocked Checkboxes</div>);

let mockedConfig = null;
jest.mock('../../helpers/getConfig', () => () => ({
  checkboxValues: mockedConfig,
}));

describe('CartItemListAfter', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should render null when no config is passed', () => {
    // eslint-disable-next-line global-require
    const CartItemListAfter = require('./index').default;
    const component = mount(<CartItemListAfter />);
    expect(component.html()).toBe(null);
  });
  it('should render null when an empty config is passed', () => {
    mockedConfig = [];
    // eslint-disable-next-line global-require
    const CartItemListAfter = require('./index').default;
    const component = mount(<CartItemListAfter />);
    expect(component.html()).toBe(null);
  });
  it('should render Checkboxes when config with checkboxValues is passed', () => {
    mockedConfig = [
      {
        mock: 'mock',
      },
    ];
    // eslint-disable-next-line global-require
    const CartItemListAfter = require('./index').default;
    const component = mount((<CartItemListAfter />));
    expect(component.find('div').exists()).toBe(true);
  });
});
