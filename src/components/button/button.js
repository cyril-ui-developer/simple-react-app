import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    disabled, value, name, handleClick,
  } = props;
  return (
    <input
      type="submit"
      className="btn btn-primary"
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


};

Button.defaultProps = {
  handleClick: () => {},
  disabled: false,


};
export default Button;
