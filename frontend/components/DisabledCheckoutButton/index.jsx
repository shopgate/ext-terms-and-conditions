import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import RippleButton from '@shopgate/pwa-ui-shared/RippleButton';
import styles from './style';

/**
 * CheckoutButton renders button
 * @param {Props} props props.
 * @returns {JSX}
 */
const DisabledCheckoutButton = props => (
  <RippleButton
    onClick={props.showTermsNotice}
    disabled={props.isActive || props.isOrderable}
    type="regular"
    className={props.isActive ? styles.button : styles.disabledButton}
  >
    <I18n.Text string="cart.checkout" />
  </RippleButton>
);

DisabledCheckoutButton.propTypes = {
  isActive: PropTypes.bool,
  isOrderable: PropTypes.bool,
  showTermsNotice: PropTypes.func,
};

DisabledCheckoutButton.defaultProps = {
  isActive: false,
  isOrderable: false,
  showTermsNotice: () => {},
};

export default DisabledCheckoutButton;
