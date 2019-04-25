
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import loadUsersData from '../../redux/actions/loadUsers';
import { FETCH_USER_DATA } from '../../redux/constants';
import DataTable from '../../components/datatable';


const mapStateToProps = state => ({
  reducedUsersData: state.usersReducer,
});

const mapDispatchToProps = dispatch => ({
  actionLoadUsers: () => dispatch(loadUsersData()),
  fetchUser: data => dispatch({ type: FETCH_USER_DATA, data }),
});

class UsersTable extends Component<{}> {
    static propTypes = {
      actionLoadUsers: PropTypes.func.isRequired,
      reducedUsersData: PropTypes.shape({}),
      fetchUser: PropTypes.func,
      onDetailClick: PropTypes.func.isRequired,
    }

    static defaultProps = {
      fetchUser: () => {},
      reducedUsersData: {},
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
      const { reducedUsersData, fetchUser } = this.props;

      return (
        <DataTable
          rows={reducedUsersData.usersData}
          page={0}
          rowsPerPage={10}
          rowsHeading={['Firstname', 'Lastname', 'Phoone no.', 'Action']}
          handleClick={(row) => {
            fetchUser(row);
            this.detailClick();
          }}

        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
