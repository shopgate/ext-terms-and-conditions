import React from 'react';
import { mount } from 'enzyme';
import { createMockStore } from '@shopgate/pwa-common/store';
import { Provider } from 'react-redux';
import { getTermsStatus } from '../../selectors';
import CheckoutButton from './index';

jest.mock('../../components/DisabledCheckoutButton', () => () => <div>Disabled Checkbox</div>);

jest.mock('../../selectors', () => ({
  getTermsStatus: jest.fn().mockReturnValue(false),
}));

const store = createMockStore();

describe('<CheckoutButton />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render as expected when not orderable', () => {
    getTermsStatus.mockReturnValue(false);
    const wrapper = mount((
      <Provider store={store}>
        <CheckoutButton>Child</CheckoutButton>
      </Provider>
    ));
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should render props.children when orderable', () => {
    getTermsStatus.mockReturnValue(true);
    const wrapper = mount((
      <Provider store={store}>
        <CheckoutButton>Child</CheckoutButton>
      </Provider>
    ));
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').exists()).toBe(false);
  });
});
