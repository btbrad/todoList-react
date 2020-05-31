import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  handleChange = (event) => {
    console.log(this.inputDOM)
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
    this.setState(
      ({ name, todoList }) => ({
        todoList: [...todoList, { id: todoList.length + 1, name: name }],
        name: '',
      }),
      () => {
        console.log(1111, this.ul.querySelectorAll('li')) // setState是异步的，必须要在第二个回到函数里操作DOM
      }
    )
  }

  handleDelete = (id) => {
    this.setState((prevState) => {
      const { todoList } = prevState
      const idx = todoList.findIndex((item) => item.id === id)
      todoList.splice(idx, 1)
      return { todoList: [...todoList] }
    })
  }

  componentDidMount() {
    axios
      .get(
        ' https://www.easy-mock.com/mock/5ed33c4d3432d25bb5ec49e6/api/todolist'
      )
      .then((res) => {
        console.log('请求成功', res)
        if (res.code !== 1) {
          return
        }
        this.setState(() => ({
          todoList: res.data.list,
        }))
      })
      .catch((error) => {
        console.log('报错')
      })
  }

  render() {
    const { todoList, name } = this.state

    return (
      <Fragment>
        <div className='input-box'>
          <label htmlFor='task'>任务名</label>
          <input
            id='task'
            type='text'
            value={name}
            onChange={this.handleChange}
            ref={(input) => {
              this.inputDOM = input
            }}
          />
          <button onClick={this.addTodo}>添加</button>
        </div>
        <ul
          className='todo-list'
          ref={(ul) => {
            this.ul = ul
          }}>
          {todoList.map((item) => {
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
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
