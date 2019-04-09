import React, { Component } from 'react';

import LoadUsers from './containers/loadusers/loadUsers';
import AddUser from './containers/adduser/addUser';
import './App.css';

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
      <div className="App">
        <main>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-1-3 pull-right-sm">
                  <AddUser userData={userData} />
                </div>
                <div className="col-2-3">
                  <LoadUsers userData={this.getUserData} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
