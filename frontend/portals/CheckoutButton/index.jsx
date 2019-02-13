import React from 'react';
import PropTypes from 'prop-types';
import DisabledCheckoutButton from '../../components/DisabledCheckoutButton';
import connect from './connector';

/**
 * @param {Object} props props.
 * @returns {JSX}
 */
const checkoutButton = (props) => {
  if (!props.isOrderable) {
    return (
      <DisabledCheckoutButton
        isOrderable={props.isOrderable}
        showTermsNotice={props.showTermsNotice}
      />
    );
  }

  return props.children;
};

checkoutButton.propTypes = {
  children: PropTypes.node.isRequired,
  isOrderable: PropTypes.bool,
  showTermsNotice: PropTypes.func,
};

checkoutButton.defaultProps = {
  isOrderable: false,
  showTermsNotice: () => {},
};
export default connect(checkoutButton);
