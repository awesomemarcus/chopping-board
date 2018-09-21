import React from 'react';
import Routes from './routes';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Routes />
      </div>
    );
  }
}

export default hot(module)(App);