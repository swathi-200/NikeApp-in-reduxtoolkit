import { useState ,useEffect} from "react"
import { useDispatch } from "react-redux";
import { postAdded } from "./postslice";
const AddForm=()=>
{
    const[title,settitle]=useState();
    const[content,setcontent]=useState();
    const dispatch=useDispatch();
    const handletitle=(e)=>
    {
        settitle(e.target.value);
    }
    const handlecontent=(e)=>
    {
        setcontent(e.target.value);
    }
  
    const handleclick=()=>
    {
      if(title && content)
      {
        dispatch(postAdded(
         title,
         content
        ))
      }
      setcontent('');
      settitle('');
    }
    return(
        <div>
          <label>title</label>  <input type="text" onChange={handletitle}/>
          <label>content</label>  <input type="text" onChange={handlecontent}/>
            <button onClick={handleclick}>Add post</button>
        </div>
    )
}
export default AddForm;