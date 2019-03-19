import { UPDATE_CHECKOUT_IS_ORDERABLE } from '../constants';

const initialState = {
  isOrderable: true,
};

/**
 * State to be used by checkout button for terms and conditions
 * @param {Object} state state
 * @param {Object} action action
 * @returns {Object}
 */
const isOrderableByTerms = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHECKOUT_IS_ORDERABLE:
      return {
        ...state,
        isOrderable: action.isOrderable,
      };
    default:
      return state;
  }
};

export default isOrderableByTerms;
