import React from 'react'
import PropTypes from 'prop-types'

const TodoItem =  function(props) {
  return <li onClick={() => {props.handleClick(props.todo.id)}}>{props.todo.name}</li>
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  handleClick: PropTypes.func
}

export default TodoItem