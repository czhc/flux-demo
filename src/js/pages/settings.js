import React from 'react';
import Todo from '../components/Todo';
import * as TodoActions from '../actions/action';
import TodoStore from '../stores/TodoStore';

export default class Settings extends React.Component {
  constructor(){
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state= {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount(){
    TodoStore.on('change', this.getTodos);
  }

  componentWillUnmount(){
    TodoStore.removeListener('change', this.getTodos);
  }

  getTodos(){
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  createTodo(){
    TodoActions.reloadTodos(Date.now());
  }

  reloadTodos(){
    TodoActions.reloadTodos()
  }

  render(){
    const { todos }  = this.state;
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} { ...todo }/>;
    });

    return <div>
      <button onClick={this.reloadTodos.bind(this)}>Reload Todo</button>
      <input />
      <h1>Settings</h1>
      <ul>{ TodoComponents } </ul>
    </div>
  }
}
