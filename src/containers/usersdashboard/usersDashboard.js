import React, { Component, Fragment } from 'react';

import UsersTable from '../userstable/usersTable';
import AddUser from '../adduser/addUser';
import EditUser from '../adduser/editUser';
import ViewTableRowDetail from '../userstable/ViewUserDetail';
import Button from '../../components/button';
import DeleteUser from '../adduser/deleteUser';

class UsersDashboard extends Component<{}> {
  state={
    openDefault: true,
    openAdd: false,
    openView: false,
    openEdit: false,
    openConfirm: false,
    openDel: false,
  }

  handleOpenClick = (value) => {
    if (value === 'openAdd') {
      this.setState({
        openAdd: true,
        openView: false,
        openEdit: false,
        openDefault: false,
        openConfirm: false,
        openDel: false,
      });
    } else if (value === 'openView') {
      this.setState({
        openView: true,
        openAdd: false,
        openEdit: false,
        openDefault: false,
        openConfirm: false,
        openDel: false,
      });
    } else if (value === 'openEdit') {
      this.setState({
        openEdit: true,
        openView: false,
        openAdd: false,
        openConfirm: false,
        openDel: false,
      });
    } else if (value === 'openDel') {
      this.setState({
        openEdit: false,
        openView: false,
        openAdd: false,
        openConfirm: false,
        openDel: true,
      });
    } else {
      this.setState({
        openView: false,
        openAdd: false,
        openEdit: false,
        openDefault: true,
        openConfirm: false,
        openDel: false,
      });
    }
  }

  handleConfirmClick =() => {
    this.setState({
      openConfirm: true,
      openAdd: false,
      openEdit: false,
      openDel: false,
    });
  }

  render() {
    const {
      openDefault, openAdd, openView, openEdit, openConfirm, openDel,
    } = this.state;
    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-1-3 pull-right-sm">
                <h4>Actions View </h4>
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
                {openDefault && (
                <section>
                  <header>
                    <h4>Clcik an action to view, add or edit user</h4>
                  </header>
                  <article>
                  Lorem ipsum dolor sit amet, sea ea eros perpetua, est ea
                  quisquod nibh. Sit esse graeci nemore ne, an dicat solet
                  quaeque mei. Sale audiam in duo, ei ridens probatus petentium pri.
                  Eripuit epicuri pri no, ne vel erant verterem.
                  No mei singulis accusamus, ea hinc nusquam ius,
                   pri urbanitas contentiones ad.
                  </article>
                </section>
                )}
                {openAdd && (
                  <div>
                    <h5>Add New User</h5>
                    <Button
                      className="btn"
                      value="Close"
                      name="adduser"
                      onHandleClick={() => this.handleOpenClick('')}
                    />
                    {/* <AddUser /> */}
                    <AddUser onHandleConfirmClick={e => this.handleConfirmClick(e)} />
                  </div>
                ) }

                {openView && (
                  <div>
                    <h5>User Detail</h5>
                    <Button
                      className="btn btn-primary"
                      value="Edit User"
                      name="edituser"
                      onHandleClick={() => this.handleOpenClick('openEdit')}
                    />
                    <Button
                      className="btn btn-primary"
                      value="Delete User"
                      name="deleteuser"
                      onHandleClick={() => this.handleOpenClick('openDel')}
                    />
                    <Button
                      className="btn"
                      value="Close"
                      name="close"
                      onHandleClick={() => this.handleOpenClick('')}
                    />
                    <ViewTableRowDetail />
                  </div>
                )}
                {
                  openEdit && (
                    <div>
                      <h5>Edit User</h5>
                      <Button
                        className="btn"
                        value="Close"
                        name="adduser"
                        onHandleClick={() => this.handleOpenClick('')}
                      />
                      <EditUser onHandleConfirmClick={e => this.handleConfirmClick(e)} />
                    </div>
                  )
                }
                {openDel && (
                <div>
                  <h5>Confirm Delete User</h5>
                  <Button
                    className="btn"
                    value="Close"
                    name="close"
                    onHandleClick={() => this.handleOpenClick('')}
                  />
                  <DeleteUser onHandleConfirmClick={e => this.handleConfirmClick(e)} />
                </div>
                )}
                {openConfirm && (
                  <div>
                    <h5>Confirmation</h5>
                    <p>Action was performed successfully.</p>
                    <Button
                      className="btn"
                      value="Close"
                      name="adduser"
                      onHandleClick={() => this.handleOpenClick('')}
                    />
                  </div>
                )}
              </div>
              <div className="col-2-3">
                <UsersTable onDetailClick={() => this.handleOpenClick('openView')} />
                <div>
                  <Button
                    className="btn btn-primary"
                    value="Add New User"
                    name="adduser"
                    onHandleClick={() => this.handleOpenClick('openAdd')}
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
