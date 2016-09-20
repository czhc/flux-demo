import React from 'react';
import Todo from '../components/Todo';

export default class Settings extends React.Component {
  constructor(){
    super();
    this.state= {
      todos: [
        {
          id: 1,
          text: 'Foo',
          checked: false
        },
        {
          id: 2,
          text: 'Bar',
          checked: true
        }
      ]
    }
  }

  render(){
    const { todos }  = this.state;
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} { ...todo }/>;
    });
    return <div>
      <h1>Settings</h1>
      <ul>{ TodoComponents } </ul>
    </div>
  }
}
