import React, { Component } from 'react';
import {
  Route,
} from 'react-router';

import UsersDashboard from './containers/usersdashboard/usersDashboard';
import './app.css';

class App extends Component {
  render() {
    return (
      <main>
        <header className="header-primary"><h2>Simple React App</h2></header>
        <section>
          <div style={{ width: 1000, margin: '0 auto' }}>
            <Route exact path="/" component={UsersDashboard} />
            <Route path="/users" component={UsersDashboard} />
            {/* <Redirect from="/" to="/users" />  */}
          </div>
        </section>
        <header className="footer-primary">...</header>
      </main>
    );
  }
}

export default App;
