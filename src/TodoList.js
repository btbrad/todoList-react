import React, {Component, Fragment} from 'react'

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input type="text"/>
          <button>添加</button>
        </div>
        <ul>
          <li>Vue</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </Fragment>
    )
  }
}

export  default TodoList