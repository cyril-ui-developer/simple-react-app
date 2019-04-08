import React, { Component } from 'react';

import LoadUsers from './containers/loadusers/loadUsers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadUsers />
      </div>
    );
  }
}

export default App;
