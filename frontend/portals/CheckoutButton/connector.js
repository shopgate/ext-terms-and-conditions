import { connect } from 'react-redux';
import { getTermsStatus } from '../../selectors';
import showTermsNotice from '../../actions';

/**
 * Maps the terms and conditions is orderable State.
 * @param {Object} state The current application state.
 * @returns {Object} The extended component props.
 */
const mapStateToProps = state => ({
  isOrderable: getTermsStatus(state),
});

/**
 * Map showTermsNotice action to the component props.
 * @param {Function} dispatch The redux dispatch function
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  showTermsNotice: () => (
    dispatch(showTermsNotice)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
