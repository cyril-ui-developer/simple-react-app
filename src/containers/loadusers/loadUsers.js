
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import loadUsersData from '../../redux/actions/loadUsers';


const mapStateToProps = state => ({
  reducedUsersData: state.usersReducer,
});

const mapDispatchToProps = dispatch => ({
  actionLoadUsers: () => dispatch(loadUsersData()),
});

class LoadUsers extends Component {
    static propTypes = {
      reducerData: PropTypes.shape({}),
      actionLoadUsers: PropTypes.arrayOf.isRequired,
      reducedUsersData: PropTypes.arrayOf.isRequired,
      userData: PropTypes.func,
    }

    static defaultProps = {
      reducerData: {},
      userData: () => {},
    };

    constructor(props) {
      super(props);

      this.state = {};
    }

    componentDidMount = () => {
      const { actionLoadUsers } = this.props;

      actionLoadUsers();
    }

    updateUser(row) {
      const { userData } = this.props;
      userData(row);
    }

    render() {
      const { reducedUsersData } = this.props;

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
        Cell: ({ value, row }) => (<button type="submit" onClick={() => { this.updateUser(row, value); }}>Edit</button>),
      },
      ];

      return (
        <div className="App">
          <ReactTable
            data={reducedUsersData.usersData}
            columns={columns}
            filterable
            pageSize={10}
          />
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadUsers);
