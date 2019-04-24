import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import UserForm from './userForm';
import submitUserData from '../../redux/actions/addUser';


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

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  actionAddUser: data => dispatch(submitUserData(data)),
});


class AddUser extends Component<{}> {
  static propTypes = {
    actionAddUser: PropTypes.func,
    reducerData: PropTypes.shape({}),
    reducedData: PropTypes.shape({}),
  }

  static defaultProps = {
    reducerData: {},
    actionAddUser: {},
    reducedData: {},
  };


  render() {
    const {
      reducedData, actionAddUser,
    } = this.props;

    return (
      <Fragment>
        <UserFormWrapped
          enableReinitialize
          onSubmit={values => actionAddUser(values)}
          initialValues={reducedData}
        />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
