import React, { Component, Fragment } from 'react';
import UsersTable from '../userstable/usersTable';
import AddUser from '../adduser/addUser';
import EditUser from '../adduser/editUser';
import ViewTableRowDetail from '../userstable/ViewUserDetail';
import Button from '../../components/button';

class UsersDashboard extends Component<{}> {
  state={
    openForm: false,
    openView: false,
    openEdit: false,
  }

  handleClick = () => {
    this.setState({
      openForm: true,
      openView: false,
      openEdit: false,
    });
  }

  handleCloseClick = () => {
    this.setState({
      openView: false,
      openForm: false,
      openEdit: false,
    });
  }

  valNew = (e) => {
    if (e === 'true') {
      this.setState({
        openView: true,
        openForm: false,
        openEdit: false,
      });
    }
  }

  handleEditClick =() => {
    this.setState({
      openEdit: true,
      openView: false,
      openForm: false,
    });
  }

  render() {
    const { openForm, openView, openEdit } = this.state;

    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-1-3 pull-right-sm">
                <h4>User Detail </h4>
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

                {openForm && (
                  <div>
                    <Button
                      className="btn btn-primary"
                      value="Close"
                      name="adduser"
                      onHandleClick={this.handleCloseClick}
                    />
                    <AddUser />
                  </div>
                ) }

                {openView && (
                  <div>
                    <Button
                      className="btn btn-primary"
                      value="Edit User"
                      name="edituser"
                      onHandleClick={this.handleEditClick}
                    />
                    <Button
                      className="btn btn-primary"
                      value="Close"
                      name="adduser"
                      onHandleClick={this.handleCloseClick}
                    />
                    <ViewTableRowDetail />
                  </div>
                )}
                {
                  openEdit && (
                    <div>
                      <Button
                        className="btn"
                        value="Close"
                        name="adduser"
                        onHandleClick={this.handleCloseClick}
                      />
                      <EditUser />
                    </div>

                  )
                }
              </div>
              <div className="col-2-3">
                <UsersTable catchVal={e => this.valNew(e)} />
                <div>
                  <Button
                    className="btn btn-primary"
                    value="Add New User"
                    name="adduser"
                    onHandleClick={this.handleClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default UsersDashboard;
