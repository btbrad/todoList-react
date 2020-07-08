import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
// import axios from 'axios'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import Test from './animation'

class TodoList extends Component {

  state = {
    name:''
  }

  handleChange = (event) => {
    const val = event.target.value
    this.setState(() => ({
      name: val,
    }))
  }

  addTodo = () => {
    const { name } = this.state
    if (!name) {
      alert('please input a task!!!')
      return
    }
    this.props.store.dispatch({
      type: 'add',
      payload: { id: this.props.store.getState().todoList.length + 1, name }
    })
    this.setState(
      // ({ name, todoList }) => ({
      //   todoList: [...todoList, { id: todoList.length + 1, name: name }],
      //   name: '',
      // }),
      // () => {
      //   console.log(1111, this.ul) // setState是异步的，必须要在第二个回到函数里操作DOM
      // }
      {
        name: ''
      }
    )
  }

  handleDelete = (id) => {
    // this.setState((prevState) => {
    //   const { todoList } = prevState
    //   const idx = todoList.findIndex((item) => item.id === id)
    //   todoList.splice(idx, 1)
    //   return { todoList: [...todoList] }
    // })
    this.props.store.dispatch({
      type: 'delete',
      payload: {
        id: id
      }
    })
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
    console.log(this.props)
    const { todoList} = this.props.store.getState()
    const {name} = this.state
    console.log('更新后store', todoList)

    return (
      <Fragment>
        <div className='input-box'>
          {/* <label htmlFor='task'>任务名</label> */}
          <Input
            placeholder='请输入todo'
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
          {/* <input
            id='task'
            type='text'
            value={name}
            onChange={this.handleChange}
            ref={(input) => {
              this.inputDOM = input
            }}
          /> */}
          <Button type='primary' onClick={this.addTodo}>
            添加
          </Button>
          {/* <button onClick={this.addTodo}>添加</button> */}
        </div>
        <List bordered className='todo-list'>
          {todoList && todoList.map((item) => {
            // return <li
            //     key={item.id}
            //     onClick={() => this.handleDelete(item.id)}
            //     dangerouslySetInnerHTML={{__html: item.name}}
            //   >
            //     {/* {`${item.id}---${item.name}`} */}
            //   </li>
            return (
              <TodoItem
                todo={item}
                key={item.id}
                handleClick={this.handleDelete}
              />
            )
          })}
        </List>
        <Test />
      </Fragment>
    )
  }
}

export default TodoList
