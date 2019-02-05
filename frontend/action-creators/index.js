import { UPDATE_CHECKOUT_IS_ORDERABLE } from '../constants';

/**
 * Updates isOrderable for checkout button
 * @param {Bool} isOrderable isOrderable
 * @returns {Object} The dispatched action object.
 */
export const updateCheckoutIsOrderable = isOrderable => ({
  type: UPDATE_CHECKOUT_IS_ORDERABLE,
  isOrderable,
});
