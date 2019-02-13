import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from './components/CheckBox';
import connect from './connector';
import styles from './style';

/**
 * Render Checkboxes based on configuration
 */
class CheckBoxes extends Component {
  static propTypes = {
    config: PropTypes.shape().isRequired,
    setCheckoutIsOrderable: PropTypes.func.isRequired,
  };
  /**
  * Constructs
  * @param {Object} props props.
  */
  constructor(props) {
    super(props);
    const values = [];
    props.config.checkBoxValues.forEach(() => {
      values.push({ checked: false });
    });

    this.state = {
      values,
    };
  }

  /**
   * Ensure Checkout is disabled on mount
   */
  componentDidMount() {
    this.props.setCheckoutIsOrderable(false);
  }
  /**
   * Handle click of checkbox
   * @param {number} value index
   */
  handleClick = (value) => {
    const updatedValues = [...this.state.values];
    updatedValues[value].checked = !this.state.values[value].checked;
    this.setState({ values: updatedValues });
    this.updateCheckoutAllowed();
  }

  updateCheckoutAllowed = () => {
    const filteredValuesArray = this.state.values.filter(value => value.checked === false);
    if (filteredValuesArray.length > 0) {
      this.props.setCheckoutIsOrderable(false);
      return;
    }
    this.props.setCheckoutIsOrderable(true);
  }

  /**
   * @returns {JSX}
   */
  render() {
    const checkBoxes = this.props.config.checkBoxValues.map((value, index) => (
      <CheckBox
        key={index.toString()}
        value={index}
        label={value.text}
        checked={this.state.values[index].checked}
        onChange={this.handleClick}
        textColor={value.textColor}
      />
    ));
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          { checkBoxes }
        </div>
      </div>
    );
  }
}

export default connect(CheckBoxes);
