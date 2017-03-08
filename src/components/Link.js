import React, { PropTypes } from 'react'
import { Button } from 'semantic-ui-react'

const Link = ({ active, children, onClick }) => {
  return (
    <Button color={active ? 'blue' : null} active={active} onClick={e => { onClick() }}>
      {children}
    </Button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
