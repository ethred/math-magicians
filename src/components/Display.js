import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Display = (props) => {
  const { className, children } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
};
Display.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Display.defaultProps = {
  className: '',
};
export default Display;
