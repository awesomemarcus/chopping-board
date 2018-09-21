import React from 'react';
import AsyncNav from 'App/Core/Nav';

export default class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <AsyncNav/>
        {this.props.children}
      </div>
    );
  }
}