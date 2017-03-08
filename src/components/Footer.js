import React from 'react'
import { Button } from 'semantic-ui-react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div>
    <label>Show:</label>
    {' '}
    <Button.Group size='mini'>
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      <Button.Or />
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      <Button.Or />
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </Button.Group>
  </div>
)

export default Footer
