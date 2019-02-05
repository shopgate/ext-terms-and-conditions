import { connect } from 'react-redux';
import { getTermsStatus } from '../../selectors';

/**
 * Maps the terms and conditions is orderable State.
 * @param {Object} state The current application state.
 * @returns {Object} The extended component props.
 */
const mapStateToProps = state => ({
  isOrderable: getTermsStatus(state),
});

export default connect(mapStateToProps);
