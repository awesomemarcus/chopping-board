import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AsyncLanding from './Core/Landing';
import AsyncLogin from './Core/Login';
import AsyncSignup from './Core/Signup';
import AsyncMain from './Core/Main';
import AsyncHome from 'App/Home';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/landing" component={AsyncLanding}/>
          <Route path="/login" component={AsyncLogin}/>
          <Route path="/signup" component={AsyncSignup}/>
          <AsyncMain>
            <Route path="/home" component={AsyncHome}/>
          </AsyncMain>
        </Switch>
      </Router>
    );
  }
}