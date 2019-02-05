import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors } = themeConfig;

const wrapper = css({
  background: colors.shade8,
}).toString();

const content = css({
  paddingTop: '15px',
  width: '80%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
}).toString();

export default {
  content,
  wrapper,
};
