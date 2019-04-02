import React from 'react';
import { mount } from 'enzyme';
import { createMockStore } from '@shopgate/pwa-common/store';
import { Provider } from 'react-redux';
import Checkbox from './index';

const store = createMockStore();

describe('Checkbox', () => {
  it('should render', () => {
    const component = mount((
      <Provider store={store}>
        <Checkbox
          label="mock"
          textColor="#000"
          value={0}
        />
      </Provider>
    ));
    expect(component.html()).not.toBe(null);
    expect(component).toMatchSnapshot();
  });
  it('should be clickable', () => {
    const mockCallBack = jest.fn();
    const component = mount((
      <Provider store={store}>
        <Checkbox
          label="mock"
          onChange={mockCallBack}
          textColor="#000"
          value={0}
        />
      </Provider>
    ));
    expect(component.html()).not.toBe(null);
    component.find('label').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(component).toMatchSnapshot();
  });
});
