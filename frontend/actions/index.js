import showModal from '@shopgate/pwa-common/actions/modal/showModal';
import getConfig from '../helpers/getConfig';

const config = getConfig();

/**
 * Shows a dialog that informs the user to accept terms and conditions
 * @param {Function} dispatch The redux dispatch function
 */
const showTermsNotice = (dispatch) => {
  dispatch(showModal({
    message: config.termsDialog,
    confirm: 'modal.ok',
    dismiss: null,
  }));
};

export default showTermsNotice;
