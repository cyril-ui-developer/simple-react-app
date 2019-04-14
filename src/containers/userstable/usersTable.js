
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import loadUsersData from '../../redux/actions/loadUsers';
import Button from '../../components/button/button';
import { FETCH_USER_DATA } from '../../redux/constants';


const mapStateToProps = state => ({
  reducedUsersData: state.usersReducer,
});

const mapDispatchToProps = dispatch => ({
  actionLoadUsers: () => dispatch(loadUsersData()),
  fetchUser: data => dispatch({ type: FETCH_USER_DATA, data }),
});

class UsersTable extends Component {
    static propTypes = {
      actionLoadUsers: PropTypes.func.isRequired,
      reducedUsersData: PropTypes.shape({}),
      fetchUser: PropTypes.func,
    }

    static defaultProps = {
      fetchUser: () => {},
      reducedUsersData: {},
    };

    componentDidMount = () => {
      const { actionLoadUsers } = this.props;

      actionLoadUsers();
    }


    render() {
      const { reducedUsersData, fetchUser } = this.props;

      const columns = [{
        Header: 'First name',
        accessor: 'firstname',
      }, {
        Header: 'Last name',
        accessor: 'lastname',
      }, {
        Header: 'Phone',
        accessor: 'phone',
      }, {
        Header: 'Birth of Birth',
        accessor: 'dob',
      },
      {
        id: 'editbutton',
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: ({ row }) => (
          <Button className="btn" value="Edit" name="editbutton" handleClick={() => fetchUser(row)} />
        ),
      },
      ];

      return (
        <ReactTable
          data={reducedUsersData.usersData}
          columns={columns}
          pageSize={10}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
