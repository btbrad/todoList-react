import { ADD, DELETE } from './actionTypes'

const defaultState = {
  todoList: [
    {
      id: 1,
      name: 'Vue',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Angular',
    },
  ],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return {todoList: [...state.todoList, action.payload]}
    case DELETE:
      let idx = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList.splice(idx, 1)
      return {todoList: [...state.todoList]}
    default:
      return state
  }
}
