import { createSelector } from 'reselect';
import { getCartProducts } from '@shopgate/pwa-common-commerce/cart/selectors';
import getConfig from '../helpers/getConfig';

export const getTermsStatus = createSelector(
  state => state,
  (state) => {
    const extensionState = state.extensions['@shopgate/terms-and-conditions/isOrderableByTerms'];
    if (!extensionState) {
      return false;
    }
    return extensionState.isOrderable;
  }
);

export const termsToDisplay = createSelector(
  getCartProducts,
  (cartProducts) => {
    if (!cartProducts) {
      return null;
    }
    const { productSpecificCheckboxValues } = getConfig();
    const productIds = [];
    cartProducts.map(cartProduct => productIds.push(cartProduct.product.id));
    const parsedTerms = productSpecificCheckboxValues.filter((value =>
      productIds.includes(value.productId)));
    return parsedTerms;
  }
);

