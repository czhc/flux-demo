import { EventEmitter } from "events";
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

}

const todoStore = new TodoStore;
window.todoStore = todoStore;
export default todoStore;
