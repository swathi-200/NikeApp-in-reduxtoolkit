import { createSlice } from "@reduxjs/toolkit";

const initialState=[
{id:'1',name:'swathii'},
{id:'2',name:'sandeep'}
]


 const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
    

    }

})

export default usersSlice.reducer;