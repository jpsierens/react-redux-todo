import undoable, { distinctState } from 'redux-undo'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const getIndex = (state, action) => {
  let index

  state.forEach((todo, i) => {
      if (todo.id === action.id) return index = i;
  });
  return index
}

const todos = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_TODO':
      let index = getIndex(state, action)

      return [
        ...state.slice(0, index),
        ...state.slice(index+1, state.length)
      ]
    default:
      return state
  }
}

const undoableTodos = undoable(todos, {
  filter: distinctState()
})

export default undoableTodos
