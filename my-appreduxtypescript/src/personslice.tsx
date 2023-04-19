import {createSlice,PayloadAction} from  '@reduxjs/toolkit'
export interface person
{
    id:number,
    name:string
}
interface personstate{
    persons:person[];
}
const initialState:personstate=
{
    persons:[]
}

export const personslice=createSlice(
    {
        name: "person",
        initialState,
        reducers:{
            addPerson:(state,action:PayloadAction<{name:string}>)=>
            {
                
                state.persons.push({
                    id:state.persons.length,
                    name:action.payload.name,

                })
            }
        }
    }
)
export default personslice.reducer;
export const {addPerson} =personslice.actions;