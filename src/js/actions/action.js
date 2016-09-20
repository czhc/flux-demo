import dispatcher from '../dispatchers/dispatcher';

export function createTodo(text){
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  });
}

export function deleteTodo(id){
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  });
}


export function reloadTodos(){
  dispatcher.dispatch({
    type: "FETCH_TODOS"
  });

  dispatcher.dispatch({
    type: "RECEIVE_TODOS",
    todos: [
      {
        id: 3,
        text: 'fetched todo',
        checked: false
      }
    ]
  })

  if (false){
    dispatcher.dispatch({ type: 'FETCH_TODOS_ERROR'});
  }
}
