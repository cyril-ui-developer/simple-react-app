
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import loadUsersData from '../../redux/actions/loadUsers';
import Button from '../../components/button/button';


const mapStateToProps = state => ({
  reducedUsersData: state.usersReducer,
});

const mapDispatchToProps = dispatch => ({
  actionLoadUsers: () => dispatch(loadUsersData()),
  fetchUser: data => dispatch({ type: 'FETCH_USER', data }),
});

class LoadUsers extends Component {
    static propTypes = {
      reduceDData: PropTypes.shape({}),
      actionLoadUsers: PropTypes.func.isRequired,
      reducedUsersData: PropTypes.shape({}),
      fetchUser: PropTypes.func,
    }

    static defaultProps = {
      reduceDData: {},
      fetchUser: () => {},
      reducedUsersData: {},
    };

    constructor(props) {
      super(props);

      this.state = {};
    }

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
          // <Button className="btn" value="Edit" name="editbutton" handleClick={() =>
          // { this.updateUser(row, value); _original.id}} />
          <Button className="btn" value="Edit" name="editbutton" handleClick={() => fetchUser(row)} />

          //  ()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})
        ),
      },
      ];

      return (
      // <div>
      //       { JSON.stringify(reducedUsersData) }
      //   </div>
        <ReactTable
          data={reducedUsersData.usersData}
          columns={columns}
          pageSize={10}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadUsers);
