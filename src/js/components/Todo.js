import React from 'react';

export default class Settings extends React.Component {
  render(){
    return <li>
      <input type="checkbox" checked={this.props.checked }/>
      { `\u00a0${this.props.text}` }
    </li>;
  }
}
