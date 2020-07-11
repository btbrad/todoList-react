import React, { Component, Fragment } from 'react'
// import axios from 'axios'
// import Test from './animation'
import { add, del, setName, getInitList } from './store/actionsCreators'
import TodoListUI from './TodoListUI'
import { connect } from 'react-redux'

class TodoList extends Component {
  handleChange = (event) => {
    const val = event.target.value
    this.props.setInputValue({ name: val })
  }

  addTodo = () => {
    const { name } = this.props
    if (!name) {
      alert('please input a task!!!')
      return
    }
    this.props.addTodoItem({ id: new Date(), name })
  }

  handleDelete = (id) => {
    this.props.delTodo({ id })
  }

  componentDidMount() {
    this.props.initTodoList()
  }

  render() {
    const { name, todoList } = this.props

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

const mapStateToProps = (state) => ({
  name: state.name,
  todoList: state.todoList,
})

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (name) => dispatch(setName(name)),
  addTodoItem: (todo) => dispatch(add(todo)),
  delTodo: (id) => dispatch(del(id)),
  initTodoList: () => dispatch(getInitList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
