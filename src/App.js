import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
              <Route path="/" component={Dashboard} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
