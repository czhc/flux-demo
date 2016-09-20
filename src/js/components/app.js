import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  navigate() {
    this.props.history.pushState(null, '/');
  }
  render(){
    return <div>
      <h1>App</h1>
      {this.props.children}
      <Link to='/'><button className='btn btn-success'>Home</button></Link>
      <Link to='settings'><button className='btn btn-success'>Settings</button></Link>
    </div>;
  }
}
