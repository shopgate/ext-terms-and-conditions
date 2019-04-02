import { updateCheckoutIsOrderable } from './index';
import { UPDATE_CHECKOUT_IS_ORDERABLE } from '../constants';

describe('action-creators', () => {
  it('should create an action to update checkout state', () => {
    const isOrderable = true;
    expect(updateCheckoutIsOrderable(isOrderable)).toEqual({
      type: UPDATE_CHECKOUT_IS_ORDERABLE, isOrderable,
    });
  });
});
