import { connect } from 'react-redux';
import { getCartItems } from '@shopgate/pwa-common-commerce/cart/selectors';
import { termsToDisplay } from '../../selectors';
import { updateCheckoutIsOrderable } from '../../action-creators';

/**
 *
 * @param {Object} state The current state.
 * @param {Object} props The props.
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  productSpecificTerms: termsToDisplay(state),
  cartItems: getCartItems(state, props),
});

/**
 * Connects the dispatch function to a callable funcion in props.
 * @param {Function} dispatch The Redux dispatch function.
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => ({
  setCheckoutIsOrderable: isOrderable => dispatch(updateCheckoutIsOrderable(isOrderable)),
});

export default connect(mapStateToProps, mapDispatchToProps);
