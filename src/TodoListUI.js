import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import TodoItem from './TodoItem'

export default (props) => {
  const { name, todoList, handleInputChange, addTodo, handleDelete } = props
  return (
    <Fragment>
      <div className='input-box'>
        <Input
          placeholder='PLease Enter a ToDo'
          id='task'
          type='text'
          value={name}
          maxLength={20}
          style={{ width: '300px' }}
          onChange={handleInputChange}
        />
        <Button type='primary' onClick={addTodo}>
          ADD
        </Button>
      </div>
      {todoList.length ? (
        <List bordered className='todo-list'>
          {todoList &&
            todoList.map((item) => {
              return (
                <TodoItem
                  todo={item}
                  key={item.id}
                  handleClick={handleDelete}
                />
              )
            })}
        </List>
      ) : (
        ''
      )}
    </Fragment>
  )
}
