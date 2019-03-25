import {
  defaultState,
  createStateWithProducts,
} from '../mock';
import {
  getTermsStatus,
  getCartProductIds,
  getTermProductIds,
  getTermsToDisplay,
  getCheckValues,
} from './index';
import { EXTENSION_STATE } from '../constants';

describe('selectors', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  describe('getTermsStatus', () => {
    it('should return false with default values', () => {
      const result = getTermsStatus(defaultState);
      expect(result).toBe(false);
    });
    it('should return true with isOrderable is true passed', () => {
      const result = getTermsStatus({
        extensions: {
          [EXTENSION_STATE]: {
            isOrderable: true,
          },
        },
      });
      expect(result).toBe(true);
    });
  });
  describe('getCartProductIds', () => {
    it('should return an empty array with default state', () => {
      const result = getCartProductIds(defaultState);
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
    it('should return cart product ids', () => {
      const stateWithProducts = createStateWithProducts(2, false);
      const result = getCartProductIds(stateWithProducts);
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual(stateWithProducts.cart.items[0].product.id);
    });
  });
  describe('getTermProductIds', () => {
    it('should return an empty Array with default State', () => {
      const result = getTermProductIds(defaultState);
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
    it('should return product ids to be used for terms for simple products', () => {
      const stateWithProducts = createStateWithProducts(2, false);
      const result = getTermProductIds(stateWithProducts);
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual(stateWithProducts.cart.items[0].product.id);
    });
    it('should return product ids to be used for terms for variant products', () => {
      const stateWithProducts = createStateWithProducts(2, true);
      const result = getTermProductIds(stateWithProducts);
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(4);
      expect(result[0])
        .toEqual(stateWithProducts.product.productsById[1].productData.baseProductId);
    });
  });
  describe('getTermsToDisplay', () => {
    it('should return an empty array with default State', () => {
      const result = getTermsToDisplay(defaultState);
      expect(result).toBeInstanceOf(Array);
    });
    it('should return terms to display for all products', () => {
      const stateWithProducts = createStateWithProducts(2, true);
      const result = getTermsToDisplay(stateWithProducts);
      expect(result).toBeInstanceOf(Array);
    });
  });
  describe('getCheckValues', () => {
    it('should return an empty array with default State', () => {
      const result = getCheckValues(defaultState);
      expect(result).toBeInstanceOf(Array);
    });
    it('should return terms to display for all products', () => {
      const stateWithProducts = createStateWithProducts(2, true);
      const result = getCheckValues(stateWithProducts);
      expect(result).toBeInstanceOf(Array);
    });
  });
});
