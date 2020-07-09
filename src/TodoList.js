import React, { Component, Fragment } from 'react'
// import axios from 'axios'
// import Test from './animation'
import store from './store/index'
import { add, del, setName, getTodoList } from './store/actionsCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  handleChange = (event) => {
    const val = event.target.value
    store.dispatch(setName({ name: val }))
  }

  addTodo = () => {
    const { name } = this.state
    if (!name) {
      alert('please input a task!!!')
      return
    }
    store.dispatch(add({ id: new Date(), name }))
  }

  handleDelete = (id) => {
    store.dispatch(del({ id }))
  }

  componentDidMount() {
    store.dispatch(getTodoList())
  }

  render() {
    const { name, todoList } = this.state

    return (
      <Fragment>
        <TodoListUI
          name={name}
          todoList={todoList}
          handleInputChange={this.handleChange}
          addTodo={this.addTodo}
          handleDelete={this.handleDelete}
        />
        {/* <Test /> */}
      </Fragment>
    )
  }
}

export default TodoList
