import React, { PropTypes } from 'react'

let Todo = ({ onClick, onDeleteClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button 
      onClick={onDeleteClick}
      style={{
        marginLeft: '10px',
        display: 'inline-block'
      }}
    >
      Delete
    </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
