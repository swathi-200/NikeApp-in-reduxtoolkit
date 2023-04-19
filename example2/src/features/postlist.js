import { useSelector } from "react-redux";
import { selectall } from "./postslice";
const PostList=()=>
{
    const post=useSelector(state=>state.posts);
    console.log(post)
    const reneredposts=post.map((post)=>
    {
        return <article key={post.id}>
            <h1>{post.title}</h1>
            <h2>{post.content}</h2>
        </article>
    })
    return(
        <div>
                 {reneredposts}
        </div>
    )
}
export default PostList