import { EXTENSION_STATE } from '../constants';

export const defaultState = {
  extensions: {
    [EXTENSION_STATE]: {
      isOrderable: false,
    },
  },
  cart: {
    items: [],
  },
  product: {
    currentProduct: { productId: null },
  },
};

export const mockedConfig = {
  checkboxValues: [
    {
      displayOn: 'all products',
      productCheckboxValues: [
        {
          text: 'Required checkbox for all products',
          textColor: '#000',
        },
      ],
    },
  ],
};

/**
 * Create mocked store with products
 * @param {number} amount amount of products to generate
 * @param {bool} isVariant should add baseProductId
 * @returns {Object}
 */
export const createStateWithProducts = (amount = 2, isVariant = false) => {
  const productIds = [];
  const productsById = {};
  const items = [];
  let baseProductId = null;
  for (let i = 1; i <= amount; i += 1) {
    if (isVariant) {
      baseProductId = (i + 100).toString();
    }
    productIds.push(i.toString());
    productsById[i] = {
      productData: {
        id: i.toString(),
        baseProductId,
      },
    };
    items.push({
      type: 'product',
      product: {
        id: i.toString(),
      },
    });
  }

  return {
    cart: {
      items,
    },
    extensions: {
      [EXTENSION_STATE]: {
        isOrderable: false,
      },
    },
    product: {
      productsById,
    },
  };
};
