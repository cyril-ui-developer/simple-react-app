
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import loadUsersData from '../../redux/actions/loadUsers';
import { FETCH_USER_DATA } from '../../redux/constants';
import DataTable from '../../components/datatable';
import ErrorHandling from '../../components/errorhandling';


const mapStateToProps = state => ({
  reducedUsersData: state.usersReducer,
  reducedData: state.usersReducer.userData,
});

const mapDispatchToProps = dispatch => ({
  actionLoadUsers: () => dispatch(loadUsersData()),
  fetchUser: data => dispatch({ type: FETCH_USER_DATA, data }),
});

class UsersTable extends Component<{}> {
    static propTypes = {
      actionLoadUsers: PropTypes.func.isRequired,
      reducedUsersData: PropTypes.shape({}).isRequired,
      fetchUser: PropTypes.func.isRequired,
      onDetailClick: PropTypes.func.isRequired,
    }

    static defaultProps = {
    };

    componentDidMount = () => {
      const { actionLoadUsers } = this.props;

      actionLoadUsers();
    }

    detailClick =() => {
      const { onDetailClick } = this.props;
      onDetailClick();
    }

    render() {
      const {
        reducedUsersData, fetchUser, actionLoadUsers,
      } = this.props;
      if (reducedUsersData.error) {
        return (
          <ErrorHandling message={reducedUsersData.error} onRetry={() => actionLoadUsers()} />
        );
      }
      return (
        <DataTable
          rows={reducedUsersData.usersData}
          page={0}
          rowsPerPage={10}
          rowsHeading={['Firstname', 'Lastname', 'Date of Birth', 'Phone', '']}
          dataColumns={['firstname', 'lastname', 'dob', 'phone']}
          handleClick={(row) => {
            fetchUser(row);
            this.detailClick();
          }}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
