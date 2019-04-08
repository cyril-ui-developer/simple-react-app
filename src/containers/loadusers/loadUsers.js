
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';

import loadUsersData from '../../redux/actions/loadUsers';

// import './App.css';

const mapStateToProps = state => ({
  reducerData: state.usersReducer,
});

const mapDispatchToProps = dispatch => ({
  actionLoadUsers: () => dispatch(loadUsersData()),
});

class LoadUsers extends Component {
    static propTypes = {
      reducerData: PropTypes.shape({}),
      actionLoadUsers: PropTypes.arrayOf.isRequired,
    }

    static defaultProps = {
      reducerData: {},
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
      return (
        <div className="App" />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadUsers);
