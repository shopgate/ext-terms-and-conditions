import React from 'react';
import { mount } from 'enzyme';
import { createMockStore } from '@shopgate/pwa-common/store';
import { Provider } from 'react-redux';
import CheckboxWrapper from './index';

jest.mock('./components/Checkbox', () => () => <div>Mocked Checkboxes</div>);

const store = createMockStore();
const mockedProduct = {
  productCheckboxValues: [
    {
      checked: false,
    },
    {
      checked: false,
    },
    {
      checked: false,
    },
  ],
};
const mockedCheckedValues = [
  {
    checked: false,
  },
  {
    checked: false,
  },
  {
    checked: false,
  },
];
describe('CheckboxWrapper', () => {
  it('should return null if empty checkedValues passed', () => {
    const component = mount((
      <Provider store={store}>
        <CheckboxWrapper
          wrapperIndex={0}
          product={mockedProduct}
          checkedValues={[]}
        />
      </Provider>
    ));
    expect(component.html()).toBe('');
  });
  it('should render', () => {
    const component = mount((
      <Provider store={store}>
        <CheckboxWrapper
          wrapperIndex={0}
          product={mockedProduct}
          checkedValues={mockedCheckedValues}
        />
      </Provider>
    ));
    expect(component.html()).not.toBe(null);
    expect(component).toMatchSnapshot();
  });
});
