import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const handleInput = (input, onAdd) => {
  onAdd(input.value)
  input.value = ''
}

let AddTodo = ({ onAdd }) => {
  let input

  return (
    <div>
      <input 
        ref={node => {
          input = node
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleInput(input, onAdd)
          }
        }} 
      />
      <button onClick={() => handleInput(input, onAdd)}>

        Add Todo
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: value => dispatch(addTodo(value))
  }
}

AddTodo = connect(
  () => {return {}},
  mapDispatchToProps
)(AddTodo)

export default AddTodo
