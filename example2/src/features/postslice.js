import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState=[
{id:'1',title:'hellllo how are youu',content:'welcome to learning redux toolkit'},
{id:'2',title:'sliceeees',content:'the more i say slice'}
]


 const postsslice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action)
            {
                state.push(action.payload)
            },
            prepare(title,content)
            {
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    

    }

})
export const {postAdded}=postsslice.actions;
export default postsslice.reducer;