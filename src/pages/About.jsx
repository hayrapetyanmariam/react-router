import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <nav>
          <Link to='team'>Team</Link>
          <Link to='contact'>Contact</Link>
      </nav>
      <Outlet/>
    </div>
  )
}
