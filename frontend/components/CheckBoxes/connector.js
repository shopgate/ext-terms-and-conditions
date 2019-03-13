import { connect } from 'react-redux';
import { getTermsToDisplay, getCheckValues } from '../../selectors';
import { updateCheckoutIsOrderable } from '../../action-creators';

/**
 * @param {Object} state The current state.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  termsToDisplay: getTermsToDisplay(state),
  checkValues: getCheckValues(state),
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
