import React, {Component, Fragment} from 'react'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        {
          id: 1,
          name: 'Vue'
        },
        {
          id: 2,
          name: 'React'
        },
        {
          id: 3,
          name: 'Angular'
        }
      ],
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  addTodo = () => {
    const { name, todoList } = this.state
    if (!name) {
      alert('please input a task!!!')
      return
    }
    this.setState({
      todoList: [...todoList, { id: todoList.length + 1, name: name }],
      name: ''
    })
  }

  handleDelete = (id) => {
    const { todoList } = this.state
    const idx = todoList.findIndex(item => item.id === id)
    todoList.splice(idx, 1)
    this.setState({
      todoList: [...todoList]
    })
  }

  render() {

    const { todoList, name } = this.state

    return (
      <Fragment>
        <div className='input-box'>
          <input type="text" value={name} onChange={this.handleChange}/>
          <button onClick={this.addTodo}>添加</button>
        </div>
        <ul className='todo-list'>
          {
            todoList.map(item => {
              return <li key={item.id}>{`${item.id}---${item.name}`}--<button onClick={() => this.handleDelete(item.id)}>删除</button></li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export  default TodoList