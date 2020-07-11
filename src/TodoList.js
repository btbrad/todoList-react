import React, { Component, Fragment } from 'react'
// import axios from 'axios'
// import Test from './animation'
import store from './store/index'
import { init, add, del, setName } from './store/actionsCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

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
    axios
      .get('http://localhost:4000/todolist')
      .then((res) => {
        console.log('请求成功', res)
        if (res.data.code !== 1) {
          return
        }
        const list = res.data.list
        const todolist = list.map((item, index) => {
          return { id: index + 1, name: item }
        })
        store.dispatch(
          init({
            list: todolist,
          })
        )
      })
      .catch((error) => {
        console.log('报错')
      })
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
