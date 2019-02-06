import { css } from 'glamor';

const wrapper = css({
  paddingTop: '5px',
}).toString();

const label = css({
  display: 'inline-block',
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
