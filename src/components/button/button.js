import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = (props) => {
  const {
    disabled, value, name, handleClick, className,
  } = props;
  return (
    <input
      type="submit"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      value={value}
      name={name}
    />

  );
};
Button.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  disabled: false,
  className: 'btn',
};
export default Button;
