import React from 'react'
import { Outlet , NavLink as Link} from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <header>
        <Link to='/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/post'>Blog</Link>
      </header>
        <main className='container'>
            <Outlet/>
        </main>
      <footer>Footer</footer>
    </div>
  )
}
