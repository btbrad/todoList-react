import React, { Component } from 'react' 
import TodoList from './TodoList'
import { Typography} from 'antd'

const { Title } = Typography;

class App extends Component {
  render() {
    return (
      <div className="app">
        <Title>TodoList</Title>
        <TodoList />
      </div>
    )
  }
}

export default App