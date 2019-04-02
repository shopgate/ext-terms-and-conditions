import React from 'react';
import { mount } from 'enzyme';

describe('DisabledCheckoutButton', () => {
  it('should render', () => {
    // eslint-disable-next-line global-require
    const DisabledCheckoutButton = require('./index').default;
    const component = mount(<DisabledCheckoutButton />);
    expect(component).toMatchSnapshot();
    expect(component.html()).not.toBe(null);
  });
});
