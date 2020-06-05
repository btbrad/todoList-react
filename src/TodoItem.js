import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import 'antd/dist/antd.css'

const ListItem = List.Item

const TodoItem = function (props) {
  return (
    <ListItem
      onClick={() => {
        props.handleClick(props.todo.id)
      }}>
      {props.todo.name}
    </ListItem>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  handleClick: PropTypes.func,
}

export default TodoItem
