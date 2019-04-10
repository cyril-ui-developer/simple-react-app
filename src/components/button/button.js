import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  const {
    disabled, handleClick, children,
  } = props;
  return (
    <button
      type="submit"
      className="btn btn-primary"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,


};

Button.defaultProps = {
  handleClick: () => {},
  children: '',
  disabled: false,


};
export default Button;
