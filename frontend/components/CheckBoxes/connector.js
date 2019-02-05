import { connect } from 'react-redux';
import { updateCheckoutIsOrderable } from '../../action-creators';

/**
 * Connects the dispatch function to a callable funcion in props.
 * @param {Function} dispatch The Redux dispatch function.
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => ({
  setCheckoutIsOrderable: isOrderable => dispatch(updateCheckoutIsOrderable(isOrderable)),
});

export default connect(null, mapDispatchToProps);
