import React from 'react';
import PropTypes from 'prop-types';

const ProcessListRow = ({process}) => {
  return (
   <li>{process.name}, {process.description}</li>
  );
};

ProcessListRow.propTypes = {
  process: PropTypes.object.isRequired
};

export default ProcessListRow;
