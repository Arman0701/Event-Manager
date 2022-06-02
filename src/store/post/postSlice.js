import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState=[
    {id:'1',
    title:'Conference ',
     content:'best content',
     date:sub(new Date(),{minutes:10}).toISOString(),
     reactions:{
         like:0,
         dislike:0
     }
    },
    {id:'2',
    title:'Conference ',
    content:'best content',
    date:sub(new Date(),{minutes:5}).toISOString(),
    reactions:{
        like:0,
        dislike:0
    }
    }
]

const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload);
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        reactions:{
                            like:0,
                            dislike:0
                        }
                    }
                }
            }
            
        },
        reactionAdded(state,action){
            const {postId,reaction}=action.payload
            const existingPost=state.find(post=>post.id===postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})
export const selectAllPosts=(state)=>state.posts;

export const { postAdded,reactionAdded }=postSlice.actions;
export default postSlice.reducer