import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {

const { id } = useParams();
const {data: blog,isPending,error} = useFetch('http://localhost:8000/blogs/' + id);
const history = useHistory();

const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
    }).then(() => {
        history.push('/');
    })
}

    return ( 

<div className ="blog-details">

    {isPending && <div>loading...</div>}
    {error && <div> {error} </div>}
    {blog && 
(<article>
    <h1>{blog.title}</h1>
    <p>Written by {blog.author}</p>
    <div>{blog.body}</div>
<button onClick={handleClick}>Delete</button>
 </article>)}

</div>


 );
}
 
export default BlogDetails;