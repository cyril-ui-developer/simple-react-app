import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';
import { required, renderField } from '../../utils/validations/formValidation';

const UserForm = (props) => {
  const {
    handleSubmit, reset, submitting, pristine,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstname"
        type="text"
        component={renderField}
        label="First name"
        validate={required}
      />
      <Field
        name="lastname"
        type="text"
        component={renderField}
        label="Last name"
        validate={required}
      />
      <Field
        name="phone"
        type="text"
        component={renderField}
        label="Phone number"
        validate={required}
      />
      <Field
        name="address"
        type="text"
        component={renderField}
        label="Address"
        validate={required}
      />
      <Field
        name="dob"
        type="text"
        component={renderField}
        label="Date of Birth"
        validate={required}
      />
      <Field
        name="age"
        type="text"
        component={renderField}
        label="Age"
      />
      <Field
        name="height"
        type="text"
        component={renderField}
        label="Height"

      />
      <Field
        name="highledu"
        type="text"
        component={renderField}
        label="Highest level of education"

      />
      <Field
        name="degee"
        type="text"
        component={renderField}
        label="Degree Obtained"

      />

      <div>

        <Button disabled={pristine || submitting}>
          Submit
        </Button>
        <Button disabled={pristine || submitting} handleClick={reset}>
          Clear
        </Button>
      </div>
    </form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,

};

UserForm.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  reset: () => {},
  submitting: false,

};


export default UserForm;
