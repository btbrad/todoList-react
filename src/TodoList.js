import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
// import axios from 'axios'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
// import Test from './animation'
import store from './store/index'
import { add, del, setName } from './store/actions'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {this.setState(store.getState())})
  }

  handleChange = (event) => {
    const val = event.target.value
    store.dispatch(setName({name: val}))
  }

  addTodo = () => {
    const { name } = this.state
    if (!name) {
      alert('please input a task!!!')
      return
    }
    store.dispatch(add({ id: store.getState().todoList.length + 1, name }))
  }

  handleDelete = (id) => {
    store.dispatch(del({id}))
  }

  componentDidMount() {
    // axios
    //   .get(
    //     // ' https://www.easy-mock.com/mock/5ed33c4d3432d25bb5ec49e6/api/todolist'
    //     'http://localhost:4000/todolist'
    //   )
    //   .then((res) => {
    //     console.log('请求成功', res)
    //     if (res.data.code !== 1) {
    //       return
    //     }
    //     const list = res.data.list
    //     const todolist = list.map((item, index) => {
    //       return { id: index + 1, name: item }
    //     })
    //     this.setState({
    //       todoList: todolist,
    //     })
    //   })
    //   .catch((error) => {
    //     console.log('报错')
    //   })
  }

  render() {
    const {name, todoList} = this.state

    return (
      <Fragment>
        <div className='input-box'>
          <Input
            placeholder='PLease Enter a ToDo'
            id='task'
            type='text'
            value={name}
            maxLength={20}
            style={{ width: '300px' }}
            onChange={this.handleChange}
            ref={(input) => {
              this.inputDOM = input
            }}
          />
          <Button type='primary' onClick={this.addTodo}>
            ADD
          </Button>
        </div>
        {todoList.length ? <List bordered className='todo-list'>
          {todoList && todoList.map((item) => {
            return (
              <TodoItem
                todo={item}
                key={item.id}
                handleClick={this.handleDelete}
              />
            )
          })}
        </List> : ''}
        {/* <Test /> */}
      </Fragment>
    )
  }
}

export default TodoList
