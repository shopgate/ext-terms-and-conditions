import React from 'react';
import { mount } from 'enzyme';
import { createMockStore } from '@shopgate/pwa-common/store';
import { Provider } from 'react-redux';
import Checkboxes from './index';
import fetchProductsById from '@shopgate/pwa-common-commerce/product/actions/fetchProductsById';
import { getTermsToDisplay, getCheckValues, getCartProductIds } from '../../selectors';
import { updateCheckoutIsOrderable } from '../../action-creators';

jest.mock('./components/CheckboxWrapper', () => () => <div>CheckboxWrapper</div>);

jest.mock('../../selectors', () => ({
  getTermsToDisplay: jest.fn().mockReturnValue([{}]),
  getCheckValues: jest.fn().mockReturnValue([{}]),
  getCartProductIds: jest.fn().mockReturnValue(['1']),
}));
const mockedGetProductsById = jest.fn();
jest.mock('@shopgate/pwa-common-commerce/product/actions/fetchProductsById', () => (...args) => mockedGetProductsById(...args));
const store = createMockStore();

describe('Checkboxes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render', () => {
    const component = mount((
      <Provider store={store}>
        <Checkboxes
          cartProductIds={['1']}
          checkValues={[{}]}
          getProducts={() => {}}
          setCheckoutIsOrderable={() => {}}
          termsToDisplay={[{}]}
        />
      </Provider>
    ));
    expect(component.html()).toBe(null);
  });
});
