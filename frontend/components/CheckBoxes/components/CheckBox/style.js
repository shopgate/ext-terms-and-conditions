import { css } from 'glamor';
import getConfig from '../../../../helpers/getConfig';

const config = getConfig();

const wrapper = css({
  paddingTop: '5px',
}).toString();

const label = css({
  display: 'inline-block',
  color: `${config.textColor}`,
  fontFamily: 'inherit',
  fontSize: '16px',
  lineHeight: '160%',
}).toString();

const labelSpan = css({
  display: 'block',
  overflow: 'auto',
}).toString();

const box = css({
  float: 'left',
  paddingRight: '8px',
}).toString();

export default {
  box,
  label,
  labelSpan,
  wrapper,
};
