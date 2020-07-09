import React from 'react'
import PropTypes from 'prop-types'
import { List, Button } from 'antd'
import 'antd/dist/antd.css'

const ListItem = List.Item

const TodoItem = function (props) {
  return (
    <ListItem
      className="list-wrap"
    >
      {props.todo.name}
      <Button className='btn-del' type="primary" danger onClick={() => {
        props.handleClick(props.todo.id)
      }}>
        DELETE
      </Button>
    </ListItem>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  handleClick: PropTypes.func,
}

export default TodoItem
