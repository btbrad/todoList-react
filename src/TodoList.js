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
    this.setState({
      todoList: [...todoList, { id: todoList.length + 1, name: name }],
      name: ''
    })
  }

  render() {

    const { todoList, name } = this.state

    return (
      <Fragment>
        <div>
          <input type="text" value={name} onChange={this.handleChange}/>
          <button onClick={this.addTodo}>添加</button>
        </div>
        <ul>
          {
            todoList.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export  default TodoList