    import React from 'react'
    import { useParams, Navigate, useNavigate } from 'react-router-dom'
    
    export const Post = () => {

      const {id} = useParams();
      const navigate = useNavigate();

      return (
        <div>
          <button onClick={()=>navigate(-1)}>Go Back</button>
          <div>
            Post {id}
          </div> 
        </div>
      )
    }
    