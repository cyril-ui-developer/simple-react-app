import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Button from '../../components/button';
import { required, renderField } from '../../utils/validations/formValidation';


const UserForm = (props) => {
  const {
    handleSubmit, reset, submitting, pristine, highLevelEdu,
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
        type="select"
        component="select"
        label="Highest level of education"
      >
        <option value="none">None</option>
        <option value="High School graduate">High School graduate</option>
        <option value="Associate's">Associate</option>
        <option value="Bachelor's degree">Bachelor</option>
        <option value="Master's degree">Master</option>
      </Field>
      {highLevelEdu && (
      <Field
        name="degree"
        type="text"
        component={renderField}
        label="Degree Obtained"
      />
      )}

      <div>

        <Button className="btn btn-primary" value="Submit" name="submit" disabled={pristine || submitting} />
        <Button className="btn" value="Clear" name="reset" disabled={pristine || submitting} onHandleClick={reset} />
      </div>
    </form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  highLevelEdu: PropTypes.string,

};

UserForm.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  reset: () => {},
  submitting: false,
  highLevelEdu: '',

};


export default UserForm;
