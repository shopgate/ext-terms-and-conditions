import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import Link from '@shopgate/pwa-common/components/Link';
import RippleButton from '@shopgate/pwa-ui-shared/RippleButton';
import { CHECKOUT_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import connect from './connector';
import styles from './style';

/**
 * CheckoutButton renders button
 * @param {Props} props props.
 * @returns {JSX}
 */
const CheckoutButton = props => (
  <Link href={CHECKOUT_PATH} disabled={!props.isActive || !props.isOrderable}>
    <RippleButton
      disabled={!props.isActive || !props.isOrderable}
      type="regular"
      className={props.isActive ? styles.button : styles.disabledButton}
    >
      <I18n.Text string="cart.checkout" />
    </RippleButton>
  </Link>
);

CheckoutButton.propTypes = {
  isActive: PropTypes.bool,
  isOrderable: PropTypes.bool,
};

CheckoutButton.defaultProps = {
  isActive: true,
  isOrderable: false,
};

export default connect(CheckoutButton);
