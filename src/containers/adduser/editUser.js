import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import UserForm from './userForm';
import editUserData from '../../redux/actions/editUser';

let UserFormWrapped = reduxForm({
  form: 'adduser-form',
  enableReinitialize: true,
})(UserForm);

const selector = formValueSelector('adduser-form');
UserFormWrapped = connect((state) => {
  const highLevelEdu = selector(state, 'highledu');
  return {
    highLevelEdu,
  };
})(UserFormWrapped);

const mapStateToProps = state => ({
  reducedData: state.usersReducer.userData,
});

const mapDispatchToProps = dispatch => ({
  actionEditUser: data => dispatch(editUserData(data)),
});

class EditUser extends Component<{}> {
    static propTypes = {
      reducerData: PropTypes.shape({}),
      reducedData: PropTypes.shape({}),
      actionEditUser: PropTypes.func,
    }

    static defaultProps = {
      reducerData: {},
      reducedData: {},
      actionEditUser: {},
    }

    render() {
      const { reducedData, actionEditUser } = this.props;

      return (
        <Fragment>
          <UserFormWrapped
            enableReinitialize
            onSubmit={values => actionEditUser(values)}
            initialValues={reducedData}
          />
        </Fragment>
      );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUser);
