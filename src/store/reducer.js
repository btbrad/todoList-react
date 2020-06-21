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
  name: '',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    default:
      return state
  }
}
