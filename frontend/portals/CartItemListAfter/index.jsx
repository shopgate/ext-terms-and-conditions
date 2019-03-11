import React from 'react';
import Checkboxes from '../../components/Checkboxes';
import getConfig from '../../helpers/getConfig';

export default () => {
  const config = getConfig();

  if (config.checkboxValues.length === 0 && config.productSpecificCheckboxValues.length === 0) {
    return null;
  }
  return (<Checkboxes config={config} />);
};
