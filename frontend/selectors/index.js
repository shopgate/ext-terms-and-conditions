import { createSelector } from 'reselect';

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
