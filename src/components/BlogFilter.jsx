import React from 'react'
import { useState } from 'react'

export const BlogFilter = ({setSearchParams}) => {

    const [search, setSearch] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()

        const params = {}
        if(search) params.post = search;
        setSearchParams(params);
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' onChange={(e)=> setSearch(e.target.value)} value = {search}/>
            <input type='submit' value='Search'/>
        </form>
    </div>
  )
}
