import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './components/Checkbox';

/**
 * Product Specific checkbox wrapper
 * @param {Object} props props
 * @returns {JSX}
 */
const CheckboxWrapper = (props) => {
  const checkboxes = props.product.productCheckboxValues.map((value, index) => (
    <Checkbox
      wrapperIndex={props.wrapperIndex}
      key={index.toString()}
      value={index}
      label={value.text}
      checked={props.checkedValues[index].checked}
      productOnChange={props.handleClick}
      textColor={value.textColor}
    />
  ));
  return checkboxes;
};

CheckboxWrapper.propTypes = {
  wrapperIndex: PropTypes.number.isRequired,
  checkedValues: PropTypes.arrayOf(PropTypes.shape()),
  handleClick: PropTypes.func,
  product: PropTypes.shape(),
};

CheckboxWrapper.defaultProps = {
  checkedValues: [],
  handleClick: () => {},
  product: {},
};

export default CheckboxWrapper;
