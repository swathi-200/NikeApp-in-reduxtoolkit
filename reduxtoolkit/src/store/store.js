import {configureStore} from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';

const countslice=createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        increment(state,action)
        {
            state.count++
        },
        decrement(state,action)
        {
            state.count--
        },
    }
})
export const actions=countslice.actions;
const store=configureStore({
    reducer:countslice.reducer
});
export default store;