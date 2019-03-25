import showTermsNotice from './index';

describe('actions', () => {
  it('should dispatch showModal', () => {
    const dispatch = jest.fn();
    showTermsNotice(dispatch);
  });
});
