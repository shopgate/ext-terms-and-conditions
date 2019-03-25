import { UPDATE_CHECKOUT_IS_ORDERABLE } from '../constants';
import reducer from './index';

describe('Reducer', () => {
  it('should prepare initial state', () => {
    const newState = reducer(undefined, { type: 'foo' });
    expect(newState).toEqual({
      isOrderable: true,
    });
  });
  it('should react on UPDATE_CHECKOUT_IS_ORDREABLE', () => {
    const oldState = {
      isOrderable: true,
    };
    const newState = reducer(oldState, {
      type: UPDATE_CHECKOUT_IS_ORDERABLE,
      isOrderable: false,
    });
    expect(newState).toEqual({
      isOrderable: false,
    });
  });
});

