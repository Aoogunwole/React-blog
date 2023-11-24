import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className='Missing'>
      <p>PAGE NOT FOUND!</p>
      <Link to = '/'>Visit our home page </Link>
    </div>
  )
}

export default Missing
