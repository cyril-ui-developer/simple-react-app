import React, { Component } from 'react';

import LoadUsers from './containers/loadusers/loadUsers';
import AddEditUser from './containers/adduser/addEditUser';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
    };
  }

  getUserData = ($event) => {
    this.setState({ userData: $event._original });
  }

  render() {
    const { userData } = this.state;
    return (
      <main>
        <header className="header-primary"><h2>Simple React App</h2></header>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-1-3 pull-right-sm">
                <h4>

User Add/Edit Form
                </h4>

              </div>
              <div className="col-2-3">
                <h4>
              User Data Table
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-1-3 pull-right-sm">
                <AddEditUser userData={userData} />
              </div>
              <div className="col-2-3">
                <LoadUsers userData={this.getUserData} />
              </div>
            </div>
          </div>
        </section>
        <header className="footer-primary">...</header>
      </main>
    );
  }
}

export default App;
