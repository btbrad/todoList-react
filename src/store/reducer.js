import { ADD, DELETE, SET_NAME } from './actionTypes'

const defaultState = {
  name: '',
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
    case SET_NAME:
      let newState = JSON.parse(JSON.stringify(state))
      newState.name = action.payload.name
      return newState
    case ADD:
      return {todoList: [...state.todoList, action.payload], name: ''}
    case DELETE:
      let idx = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList.splice(idx, 1)
      return {todoList: [...state.todoList], name: ''}
    default:
      return state
  }
}
