import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice'

const reactionEmodji={
    like:'👍',
    dislike:'👎',
}
  // eslint-disable-next-line react/prop-types
export const ReactionsButtons = ({post}) => {
    const dispatch=useDispatch()
    const reactionButtons=Object.entries(reactionEmodji).map(([name,emoji])=>{
        return (
            <button
            key={name}
            type='button'
            className='reactionButton'
            onClick={()=>
                dispatch(reactionAdded({postId:post.id,reaction:name}))
            }
            >
            
              {emoji} {post.reactions[name]}
            </button>
            )
            
        })
        return <div>{reactionButtons}</div>
    }
 
