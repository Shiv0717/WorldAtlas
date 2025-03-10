import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
      {error && <p>{error.data}</p>}
      <NavLink to='/'>Go Home</NavLink>
    </div>
  )
}

export default Error
