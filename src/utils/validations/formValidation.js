import React from 'react';
import PropTypes from 'prop-types';

export const required = value => (value ? undefined : 'Please enter a value');

export const renderField = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <div>
    <span>{label}</span>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.shape({}),
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({}),
};
renderField.defaultProps = {
  input: {},
  label: '',
  type: '',
  meta: {},
};
