import React, { Component, Fragment } from 'react';
import UsersTable from '../userstable/usersTable';
import AddEditUser from '../adduser/addEditUser';


class UsersDashboard extends Component<{}> {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-1-3 pull-right-sm">
                <h4>User Add/Edit Form </h4>
              </div>
              <div className="col-2-3">
                <h4>User Data Table </h4>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-1-3 pull-right-sm">
                <AddEditUser />
              </div>
              <div className="col-2-3">
                <UsersTable />

              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default UsersDashboard;
