import React, { Component } from 'react'; import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';

import UserForm from './userForm';
import submitUserData from '../../redux/actions/addUser';
import editUserData from '../../redux/actions/editUser';

function validateUser(data) {
  const errors = {};
  if (!data.firstname) {
    errors.firstname = 'Required';
  }
  // if(data.address && data.address.length > 50) {
  //   errors.address = 'Must be fewer than 50 characters';
  // }
  // if(!data.phone) {
  //   errors.phone = 'Required';
  // } else if(!/\d{3}-\d{3}-\d{4}/.test(data.phone)) {
  //   errors.phone = 'Phone must match the form "999-999-9999"'
  // }
  return errors;
}
const UserFormWrapped = reduxForm({
  form: 'adduser-form', // a unique identifier for this form
  enableReinitialize: true,
  validate: validateUser,
  fields: ['firstname', 'lastname', 'dob', 'address', 'phone'],
})(UserForm);

const mapStateToProps = state => ({
  reducerData: state.addUserReducer,
});

const mapDispatchToProps = dispatch => ({
  actionAddUsers: data => dispatch(submitUserData(data)),
  actionEditUsers: data => dispatch(editUserData(data)),
});


class AddEditUser extends Component {
  static propTypes = {
    actionAddUsers: PropTypes.func,
    reducerData: PropTypes.shape({}),
    userData: PropTypes.shape({}),
    actionEditUsers: PropTypes.func,
  }

  static defaultProps = {
    reducerData: {},
    actionAddUsers: {},
    userData: {},
    actionEditUsers: {},
  };

actionsUser =(id, values) => {
  const {
    actionAddUsers, actionEditUsers,
  } = this.props;
  if (id) {
    actionEditUsers(values);
  } else {
    actionAddUsers(values);
  }
}

render() {
  const {
    userData,
  } = this.props;

  return (
    <div>
      <header>
         User Form
      </header>
      <UserFormWrapped
        enableReinitialize
        onSubmit={values => this.actionsUser(userData.id, values)}
        initialValues={userData}
      />

    </div>
  );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditUser);
