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
    case 'add':
      return {todoList: [...state.todoList, action.payload]}
    case 'delete':
      let idx = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList.splice(idx, 1)
      return {todoList: [...state.todoList]}
    default:
      return state
  }
}
