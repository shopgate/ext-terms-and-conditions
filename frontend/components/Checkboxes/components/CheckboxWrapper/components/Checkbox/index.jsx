import React from 'react';
import PropTypes from 'prop-types';
import SharedCheckbox from '@shopgate/pwa-ui-shared/Checkbox';
import styles from './style';

/**
 * CheckBox component
 * @param {Object} props props
 * @returns {JSX}
 */
const Checkbox = props => (
  <div className={styles.wrapper}>
    <label
      onClick={() => props.onChange(props.wrapperIndex, props.value)}
      className={styles.label}
      style={{ color: `${props.textColor}` }}
    >
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

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  wrapperIndex: PropTypes.number,
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
  wrapperIndex: null,
};

export default Checkbox;
