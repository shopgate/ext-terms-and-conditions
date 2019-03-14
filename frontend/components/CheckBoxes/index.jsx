import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxWrapper from './components/CheckboxWrapper';
import connect from './connector';
import styles from './style';

/**
 * Render Checkboxes based on configuration
 */
class Checkboxes extends Component {
  static propTypes = {
    checkValues: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    setCheckoutIsOrderable: PropTypes.func.isRequired,
    termsToDisplay: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };
  /**
  * Constructs
  * @param {Object} props props.
  */
  constructor(props) {
    super(props);
    this.state = {
      checkValues: this.props.checkValues,
    };
  }

  /**
   * Ensure Checkout is disabled on mount
   */
  componentDidMount() {
    this.props.setCheckoutIsOrderable(false);
  }

  /**
   * Update state with new props
   * @param {Object} prevProps prevProps
   */
  componentDidUpdate(prevProps) {
    if (this.props.checkValues !== prevProps.checkValues) {
      this.updateCheckedValues();
    }
  }

  /**
   * Updates
   */
  updateCheckedValues() {
    this.setState((state, props) => ({
      checkValues: props.checkValues,
    }));
  }

  /**
   * Handle click of checkbox
   * @param {number} index index
   * @param {number} checkedIndex checkedIndec
   */
  handleClick = (index, checkedIndex) => {
    const updateCheckValues = [...this.state.checkValues];
    updateCheckValues[index].checkedValues[checkedIndex].checked =
      !this.state.checkValues[index].checkedValues[checkedIndex].checked;
    this.setState({ checkValues: updateCheckValues });
    this.updateCheckoutAllowed();
  }

  updateCheckoutAllowed = () => {
    let orderable = true;
    this.state.checkValues.forEach((element) => {
      const { checkedValues = [] } = element || {};
      const falseItem = checkedValues.find(value => value.checked === false);
      if (falseItem) {
        orderable = false;
      }
    });
    this.props.setCheckoutIsOrderable(orderable);
  }

  /**
   * @returns {JSX}
   */
  render() {
    const {
      termsToDisplay,
    } = this.props;
    const {
      checkValues,
    } = this.state;
    const checkboxes = termsToDisplay.map((product, index) => {
      if (typeof checkValues[index].checkedValues !== 'undefined') {
        return (
          <CheckboxWrapper
            checkedValues={checkValues[index].checkedValues}
            product={product}
            key={index.toString()}
            wrapperIndex={index}
            handleClick={this.handleClick}
          />);
      }
      return null;
    });
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          { checkboxes }
        </div>
      </div>
    );
  }
}

export default connect(Checkboxes);
