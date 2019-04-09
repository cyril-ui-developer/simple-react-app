import React, { Component } from 'react'; import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';

import addUserForm from './addUserForm';
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
const AddUserFormWrapped = reduxForm({
  form: 'adduser-form', // a unique identifier for this form
  enableReinitialize: true,
  validate: validateUser,
  fields: ['firstname', 'lastname', 'dob', 'address', 'phone'],
})(addUserForm);

const mapStateToProps = state => ({
  reducerData: state.addUserReducer,
});

const mapDispatchToProps = dispatch => ({
  actionAddUsers: data => dispatch(submitUserData(data)),
  actionEditUsers: data => dispatch(editUserData(data)),
});


class AddUser extends Component {
  static propTypes = {
    actionAddUsers: PropTypes.shape({}),
    reducerData: PropTypes.shape({}),
    userData: PropTypes.shape({}),
    actionEditUsers: PropTypes.shape({}),
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
         Add User
      </header>
      <AddUserFormWrapped
        enableReinitialize
        onSubmit={values => this.actionsUser(userData.id, values)}
        initialValues={userData}
      />

    </div>
  );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
