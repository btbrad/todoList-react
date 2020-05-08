import React from 'react'

export default function(props) {
  return <li onClick={() => {props.handleClick(props.todo.id)}}>{props.todo.name}</li>
}