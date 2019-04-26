import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import deleteUserData from '../../redux/actions/deleteUser';
import ViewTableRowDetail from '../../components/viewtablerowdetail';
import Button from '../../components/button';

const mapStateToProps = state => ({
  reducedData: state.usersReducer.userData,
  reducedConfirmSubmit: state.usersReducer.confirmSubmit,
});

const mapDispatchToProps = dispatch => ({
  actionDeleteUser: data => dispatch(deleteUserData(data)),
});


class DeleteUser extends Component<{}> {
    static propTypes = {
      reducerData: PropTypes.shape({}).isRequired,
      reducedData: PropTypes.shape({}).isRequired,
      actionDeleteUser: PropTypes.func.isRequired,
      onHandleConfirmClick: PropTypes.func.isRequired,
      reducedConfirmSubmit: PropTypes.bool.isRequired,
    }

    static defaultProps = {
    }

    handleConfirmClick = () => {
      const { onHandleConfirmClick, reducedConfirmSubmit } = this.props;
      onHandleConfirmClick(reducedConfirmSubmit);
    }

    render() {
      const { reducedData, actionDeleteUser } = this.props;
      const dataConfig = [
        {
          label: 'Firstname: ',
          value: 'firstname',
        },
        {
          label: 'Lastname: ',
          value: 'lastname',
        }, {
          label: 'Date of Birth: ',
          value: 'dob',
        },
        {
          label: 'Age: ',
          value: 'age',
        }, {
          label: 'Height: ',
          value: 'height',
        },
        {
          label: 'Address: ',
          value: 'address',
        }, {
          label: 'Phone Number: ',
          value: 'phone',
        },
        {
          label: 'Highest Level Education: ',
          value: 'highledu',
        }, {
          label: 'Degree: ',
          value: 'degree',
        },
      ];
      return (
        <Fragment>
          <Button
            className="btn btn-primary"
            value="Yes, Delete"
            name="deleteuser"
            onHandleClick={() => {
              actionDeleteUser(reducedData);
              this.handleConfirmClick();
            }
            }
          />
          <ViewTableRowDetail configData={dataConfig} dataSource={reducedData} />
        </Fragment>
      );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteUser);
