import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors, variables } = themeConfig;

const wrapper = css({
  background: colors.shade8,
}).toString();

const content = css({
  padding: `15px ${variables.gap.big}px 0px ${variables.gap.big}px`,
  display: 'block',
}).toString();

export default {
  content,
  wrapper,
};
