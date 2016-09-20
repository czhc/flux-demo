import { EventEmitter } from "events";
import dispatcher from '../dispatchers/dispatcher';

class TodoStore extends EventEmitter {
  constructor(){
    super();
    this.todos = [
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
    ];
  }

  createTodo(text){
    const id = Date.now();
    this.todos.push({
      id,
      text,
      checked: false,
    });

    this.emit('change');
  }

  getAll() {
    return this.todos;
  }

  handleActions(action){
    switch(action.type){
      case 'CREATE_TODO': {
        this.createTodo(action.text);
      }
    }
  }
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
