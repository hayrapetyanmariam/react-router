import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';
import { useSearchParams } from 'react-router-dom';

export const Blog = () => {

  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  })

 
  return (
    <div>
    <BlogFilter setSearchParams = {setSearchParams}/>
      {
        posts
        .filter(el => el.title.includes(postQuery))
        .map(el => <Link key={el.id} to = {'/post/' + el.id}><li>{el.title}</li></Link>)
      }
    </div>
  )
}
