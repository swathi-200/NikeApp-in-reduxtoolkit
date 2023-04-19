import React,{useState} from 'react'
import { addPerson } from './personslice';
import { useAppDispatch } from './store';

const Add=()=>
{
    const dispatch=useAppDispatch();
    const [name,setname]=useState<any>();
    return(
 <>
         <form>
         <input type="text" onChange={(e)=>setname(e.target.value)}/>
         <button onClick={()=>dispatch(addPerson({name}))}>Add</button>
         </form>
         </>

    )
}

export default Add;