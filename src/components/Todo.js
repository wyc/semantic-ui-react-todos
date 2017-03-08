import React, { PropTypes } from 'react'
import { Checkbox } from 'semantic-ui-react'

const Todo = ({ onClick, completed, text }) => (
  <li>
    <Checkbox onClick={onClick} checked={completed} label={(
      <label style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
      </label>
    )}/>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
