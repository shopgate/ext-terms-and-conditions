import { createSelector } from 'reselect';
import { getCartProducts } from '@shopgate/pwa-common-commerce/cart/selectors';
import { getProducts } from '@shopgate/pwa-common-commerce/product/selectors/product';
import { EXTENSION_STATE, ALL_PRODUCTS } from '../constants';
import getConfig from '../helpers/getConfig';

const { checkboxValues } = getConfig();

/**
 * @param {Object} state state
 * @returns {Object}
 */
const getExtensionsState = state => state.extensions;

const getExtensionState = createSelector(
  getExtensionsState,
  extensionsState => extensionsState[EXTENSION_STATE]
);

export const getTermsStatus = createSelector(
  getExtensionState,
  extensionState => extensionState.isOrderable
);

export const getCartProductIds = createSelector(
  getCartProducts,
  (cartProducts) => {
    if (!cartProducts) {
      return null;
    }
    return cartProducts.map(cartProduct => cartProduct.product.id);
  }
);

export const getTermProductIds = createSelector(
  getCartProductIds,
  getProducts,
  (cartProductIds, products) => {
    const productsToCheck = [];
    if (!cartProductIds) {
      return null;
    }
    cartProductIds.forEach((cartProductId) => {
      if (products.hasOwnProperty(cartProductId)) {
        const testBaseProductId = products[cartProductId].productData.baseProductId;
        if (testBaseProductId) {
          productsToCheck.push(testBaseProductId, cartProductId);
          return;
        }
        productsToCheck.push(cartProductId);
      }
    });
    return productsToCheck;
  }
);

export const getTermsToDisplay = createSelector(
  getTermProductIds,
  (productIds) => {
    if (!productIds) {
      return null;
    }
    return checkboxValues.filter((value =>
      productIds.includes(value.displayOn) || value.displayOn === ALL_PRODUCTS));
  }
);

export const getCheckValues = createSelector(
  getTermsToDisplay,
  (terms) => {
    const checkedValues = [];
    if (!terms) {
      return null;
    }
    terms.forEach((product, index) => {
      checkedValues.push({
        displayFor: `${product.displayOn}`,
        checkedValues: [],
      });
      product.productCheckboxValues.forEach(() => {
        checkedValues[index].checkedValues.push({ checked: false });
      });
    });
    return checkedValues;
  }
);

