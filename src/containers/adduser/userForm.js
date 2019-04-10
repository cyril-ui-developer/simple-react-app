import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';

// const renderField = ({ input, span, type, meta: { touched, error, warning } }) => (
//     <div>
//       <span>{span}</span>
//       <div>
//         <input {...input} placeholder={span} type={type}/>
//         {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//       </div>
//     </div>
//   )

//   const required = value => value ? undefined : 'Required'
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined
// const minValue18 = minValue(18)


const UserForm = (props) => {
  const {
    handleSubmit, reset, submitting, pristine,
    // pristine,fields: {firstname, lastname, dob, address, phone,},
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      {/* <Field name="username" type="text"
        component={renderField} span="Username"
        validate={[ required, maxLength ]}
      /> */}
      <div>
        <span>First name</span>
        <div>
          <Field
            name="firstname"
            component="input"
            type="text"
          />
        </div>
        {/* {firstname.error && firstname.touched && <div>{firstname.error}</div>} */}
      </div>
      <div>
        <span>Last name</span>
        <div>
          <Field
            name="lastname"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <span>Phone</span>
        <div>
          <Field
            name="phone"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <span>Address</span>
        <div>
          <Field
            name="address"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <span>Date of Birth</span>
        <div>
          <Field
            name="dob"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <span>Age</span>
        <div>
          <Field
            name="age"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <span>Height</span>
        <div>
          <Field
            name="height"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <span>Highest Level Education</span>
        <div>
          <Field
            name="highledu"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <span>Degree</span>
        <div>
          <Field
            name="degree"
            component="input"
            type="text"
          />
        </div>
      </div>

      <div>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button type="submit" disabled={pristine || submitting} handleClick={reset}>
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
