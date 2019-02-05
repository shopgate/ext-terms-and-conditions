import React from 'react';
import PropTypes from 'prop-types';
import SharedCheckbox from '@shopgate/pwa-ui-shared/Checkbox';
import styles from './style';

/**
 * CheckBox component
 * @param {Object} props props
 * @returns {JSX}
 */
const CheckBox = props => (
  <div className={styles.wrapper}>
    <label onClick={() => props.onChange(props.value)} className={styles.label}>
      <SharedCheckbox
        className={styles.box}
        type="checkbox"
        value={props.value}
        checked={props.checked}
      />
      <span className={styles.labelSpan}>{props.label}</span>
    </label>
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default CheckBox;
