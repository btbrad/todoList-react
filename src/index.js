import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import './index.css'
import store from './store/index'

ReactDOM.render(<TodoList store={store} />, document.getElementById('root'))

store.subscribe(() => {
  console.log(11111, store)
  ReactDOM.render(<TodoList store={store}/>, document.getElementById('root'))
})