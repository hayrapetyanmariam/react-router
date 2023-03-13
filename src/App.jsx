import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path='post' element = {<Blog/>}/>
          <Route path='post/:id' element = {<Post/>}/>
          <Route path='about' element = {<About/>}>
              <Route path='contact' element = {<div>Contact</div>}/>
              <Route path='team' element = {<div>Team</div>}/>
          </Route>
      </Route>
    </Routes>
  )
}
