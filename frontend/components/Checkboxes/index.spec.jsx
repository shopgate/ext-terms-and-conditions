import React from 'react';
import { mount } from 'enzyme';
import { createMockStore } from '@shopgate/pwa-common/store';
import { Provider } from 'react-redux';
import Checkboxes from './index';
import CheckboxWrapper from './components/CheckboxWrapper';

jest.mock('./components/CheckboxWrapper', () => () => <div>CheckboxWrapper</div>);

jest.mock('../../selectors', () => ({
  getTermsToDisplay: jest.fn().mockReturnValue([{}]),
  getCheckValues: jest.fn().mockReturnValue([{}]),
  getCartProductIds: jest.fn().mockReturnValue(['1']),
}));
jest.mock('@shopgate/pwa-common-commerce/product/actions/fetchProductsById', () => () => ({ type: 'bar' }));
const store = createMockStore();

describe('Checkboxes', () => {
  it('should render checkboxwrapper', () => {
    const component = mount((
      <Provider store={store}>
        <Checkboxes />
      </Provider>
    ));
    expect(component).toMatchSnapshot();
    expect(component.find(CheckboxWrapper).length).toBe(1);
  });
});
