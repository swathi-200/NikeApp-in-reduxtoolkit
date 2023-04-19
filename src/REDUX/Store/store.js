import  createStore  from "redux";

const reducerfn=(state={count:0},action)=>
{
    if(action.type==="inc")
    {
        return {count:state.count+1}
    }
    if(action.type==="dec")
    {
        return {count:state.count-1}
    }
    return state

}
const store=createStore(reducerfn);
export default store;