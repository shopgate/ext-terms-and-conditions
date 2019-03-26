import showTermsNotice from './index';
import getConfig from '../helpers/getConfig';

const config = getConfig();
const mockedShowModalSpy = jest.fn();
jest.mock('@shopgate/pwa-common/actions/modal/showModal', () => (...args) => { mockedShowModalSpy(...args); });
describe('actions', () => {
  it('should dispatch showModal', () => {
    const dispatch = jest.fn();
    showTermsNotice(dispatch);
    expect(mockedShowModalSpy).toHaveBeenCalledWith({
      message: config.termsDialog,
      confirm: 'modal.ok',
      dismiss: null,
    });
  });
});
