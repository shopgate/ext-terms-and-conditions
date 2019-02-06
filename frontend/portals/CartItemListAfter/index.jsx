import React from 'react';
import CheckBoxes from '../../components/CheckBoxes';
import getConfig from '../../helpers/getConfig';

export default () => {
  const config = getConfig();

  if (config.checkBoxValues.length === 0) {
    return null;
  }
  return (<CheckBoxes config={config} />);
};
