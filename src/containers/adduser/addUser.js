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

const mapStateToProps = state => ({
  reducedConfirmSubmit: state.usersReducer.confirmSubmit,

});

const mapDispatchToProps = dispatch => ({
  actionAddUser: data => dispatch(submitUserData(data)),
});


class AddUser extends Component<{}> {
  static propTypes = {
    actionAddUser: PropTypes.func,
    reducerData: PropTypes.shape({}),
    reducedData: PropTypes.shape({}),
    onHandleConfirmClick: PropTypes.func.isRequired,
    reducedConfirmSubmit: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    reducerData: {},
    actionAddUser: {},
    reducedData: {},

  };

  handleConfirmClick =() => {
    const { onHandleConfirmClick, reducedConfirmSubmit } = this.props;
    onHandleConfirmClick(reducedConfirmSubmit);
  }

  render() {
    const {
      reducedData, actionAddUser,
    } = this.props;

    return (
      <Fragment>
        <UserFormWrapped
          enableReinitialize
          onSubmit={(values) => {
            actionAddUser(values);
            this.handleConfirmClick();
          }
          }
          initialValues={reducedData}
        />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
