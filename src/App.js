import React, { Component } from 'react';
import {
  Route, Redirect, Switch,
} from 'react-router';

import UsersDashboard from './containers/usersdashboard/usersDashboard';
import PageNotFound from './components/pagenotfound/pageNotFound';
import './app.css';

class App extends Component {
  render() {
    return (
      <main>
        <header className="header-primary"><h2>Simple React App</h2></header>
        <section>

          <div style={{ width: 1000, margin: '0 auto' }}>
            <Switch>
              <Route exact path="/" component={UsersDashboard} />
              <Redirect from="/users" to="/" />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </section>
        <header className="footer-primary">...</header>
      </main>
    );
  }
}

export default App;
