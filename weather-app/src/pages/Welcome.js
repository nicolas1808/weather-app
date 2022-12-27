import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      Welcome
      <div>
          <Link to="/main">Ir a Main</Link>
      </div>
    </div>
  )
}

export default Welcome
