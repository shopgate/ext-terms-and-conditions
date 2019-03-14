import { connect } from 'react-redux';
import fetchProductsById from '@shopgate/pwa-common-commerce/product/actions/fetchProductsById';
import { getTermsToDisplay, getCheckValues, getCartProductIds } from '../../selectors';
import { updateCheckoutIsOrderable } from '../../action-creators';

/**
 * @param {Object} state The current state.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  termsToDisplay: getTermsToDisplay(state),
  checkValues: getCheckValues(state),
  cartProductIds: getCartProductIds(state),
});

/**
 * Connects the dispatch function to a callable funcion in props.
 * @param {Function} dispatch The Redux dispatch function.
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => ({
  setCheckoutIsOrderable: isOrderable => dispatch(updateCheckoutIsOrderable(isOrderable)),
  getProducts: productIds => dispatch(fetchProductsById(productIds)),
});

export default connect(mapStateToProps, mapDispatchToProps);
