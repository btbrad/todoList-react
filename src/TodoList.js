import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'

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
    console.log('11111', id)
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
          <label htmlFor="task">任务名</label>
          <input id="task" type="text" value={name} onChange={this.handleChange}/>
          <button onClick={this.addTodo}>添加</button>
        </div>
        <ul className='todo-list'>
          {
            todoList.map(item => {
              // return <li 
              //     key={item.id}
              //     onClick={() => this.handleDelete(item.id)}
              //     dangerouslySetInnerHTML={{__html: item.name}}
              //   >
              //     {/* {`${item.id}---${item.name}`} */}
              //   </li>
              return <TodoItem todo={item} key={item.id} handleClick={this.handleDelete} />
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export  default TodoList