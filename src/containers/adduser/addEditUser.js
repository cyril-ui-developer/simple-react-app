import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import UserForm from './userForm';
import submitUserData from '../../redux/actions/addUser';
import editUserData from '../../redux/actions/editUser';


let UserFormWrapped = reduxForm({
  form: 'adduser-form',
  enableReinitialize: true,
})(UserForm);

const selector = formValueSelector('adduser-form');
UserFormWrapped = connect(
  (state) => {
    const highLevelEdu = selector(state, 'highledu');
    return {
      highLevelEdu,
    };
  },
)(UserFormWrapped);

const mapStateToProps = state => ({
  reducedData: state.usersReducer.userData,
});

const mapDispatchToProps = dispatch => ({
  actionAddUsers: data => dispatch(submitUserData(data)),
  actionEditUsers: data => dispatch(editUserData(data)),
});


class AddEditUser extends Component {
  static propTypes = {
    actionAddUsers: PropTypes.func,
    reducerData: PropTypes.shape({}),
    reducedData: PropTypes.shape({}),
    actionEditUsers: PropTypes.func,
  }

  static defaultProps = {
    reducerData: {},
    actionAddUsers: {},
    reducedData: {},
    actionEditUsers: {},
  };

actionsUser =(id, values) => {
  const {
    actionAddUsers, actionEditUsers, reducedData,
  } = this.props;

  if (reducedData.id !== undefined) {
    actionEditUsers(values);
  } else {
    actionAddUsers(values);
  }
}

render() {
  const {
    reducedData,
  } = this.props;

  return (
    <Fragment>
      <UserFormWrapped
        enableReinitialize
        onSubmit={values => this.actionsUser(reducedData, values)}
        initialValues={reducedData}
      />
    </Fragment>
  );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditUser);
