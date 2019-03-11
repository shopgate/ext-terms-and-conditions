import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './components/Checkbox';
import ProductSpecificWrapper from './components/ProductSpecificWrapper';
import connect from './connector';
import styles from './style';

/**
 * Render Checkboxes based on configuration
 */
class Checkboxes extends Component {
  static propTypes = {
    config: PropTypes.shape().isRequired,
    setCheckoutIsOrderable: PropTypes.func.isRequired,
    cartItems: PropTypes.arrayOf(PropTypes.shape()),
    productSpecificTerms: PropTypes.arrayOf(PropTypes.shape()),
  };

  static defaultProps = {
    cartItems: [],
    productSpecificTerms: {},
  }
  /**
  * Constructs
  * @param {Object} props props.
  */
  constructor(props) {
    super(props);
    const values = [];
    const specificValues = [];
    this.state = {
      values,
      specificValues,
    };
  }

  /**
   * Ensure Checkout is disabled on mount
   */
  componentDidMount() {
    this.props.setCheckoutIsOrderable(false);
    this.generateCheckedValues();
  }
  /**
   * Update checkbox values on component update.
   * @param {Object} prevProps previous component props
   */
  componentDidUpdate(prevProps) {
    console.warn('current cartProductCount', this.props.cartItems);
    console.warn('prevProps cartProduct count', prevProps.cartItems);
    if (this.props.cartItems !== prevProps.cartItems) {
      this.generateCheckedValues();
    }
  }
  /**
   * Generate Checked Values
   */
  generateCheckedValues() {
    const updatedStateValues = [...this.state.values];
    const updateStateSpecificValues = [...this.state.specificValues];
    this.props.config.checkboxValues.forEach(() => {
      updatedStateValues.push({ checked: false });
    });
    this.props.productSpecificTerms.forEach((product, index) => {
      updateStateSpecificValues.push({
        productId: `${product.productId}`,
        checkedValues: [],
      });
      product.productCheckboxValues.forEach(() => {
        updateStateSpecificValues[index].checkedValues.push({ checked: false });
      });
    });
    this.setState(() => ({
      values: updatedStateValues,
      specificValues: updateStateSpecificValues,
    }));
  }
  /**
   * Handle click of checkbox
   * @param {number} index index
   */
  handleClick = (index) => {
    const updatedValues = [...this.state.values];
    updatedValues[index].checked = !this.state.values[index].checked;
    this.setState({ values: updatedValues });
    this.updateCheckoutAllowed();
  }
  /**
   * Handle click for specific product checkbox
   * @param {number} index index
   * @param {number} checkedIndex checkedIndec
   */
  handleSpecificClick = (index, checkedIndex) => {
    const updateSpecificValues = [...this.state.specificValues];
    updateSpecificValues[index].checkedValues[checkedIndex].checked =
      !this.state.specificValues[index].checkedValues[checkedIndex].checked;
    this.setState({ specificValues: updateSpecificValues });
    this.updateCheckoutAllowed();
  }

  updateCheckoutAllowed = () => {
    const combinedValuesArray = this.state.values;
    this.state.specificValues.forEach((product) => {
      product.checkedValues.forEach((value) => {
        combinedValuesArray.push(value);
      });
    });
    const filteredValuesArray = combinedValuesArray.filter(value => value.checked === false);
    console.warn('filtered values update checkout', filteredValuesArray);
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
    console.warn(this.props.cartItems);
    const {
      productSpecificTerms,
      config,
    } = this.props;
    let productSpecificCheckboxes = [];
    let checkboxes = [];
    if (this.state.values.length > 0) {
      checkboxes = config.checkboxValues.map((value, index) => (
        <Checkbox
          key={index.toString()}
          value={index}
          label={value.text}
          checked={this.state.values[index].checked}
          onChange={this.handleClick}
          textColor={value.textColor}
        />
      ));
    }
    if (this.state.specificValues.length > 0) {
      productSpecificCheckboxes = productSpecificTerms.map((product, index) => (
        <ProductSpecificWrapper
          checkedValues={this.state.specificValues[index].checkedValues}
          product={product}
          key={index.toString()}
          wrapperIndex={index}
          handleClick={this.handleSpecificClick}
        />
      ));
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          { checkboxes }
          { productSpecificCheckboxes }
        </div>
      </div>
    );
  }
}

export default connect(Checkboxes);
