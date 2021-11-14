import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {

const [title,setTitle] = useState('');
const [author, setAuthor] = useState('patryk');
const [body, setBody] = useState('');
const [isPending, setisPending] = useState(false);
const history = useHistory();

const handleSubmit = (e) =>{
e.preventDefault();
const blog = { title,author,body};
setisPending(true);

    fetch('http://localhost:8000/blogs', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        setisPending(false);
    // history.go(- lub + ) zalezy w ktora strone
        history.push('/');
});

 }
    return (  
    <div className="create">
<h2>Add a new blog</h2>

<form onSubmit={handleSubmit}>
<label >Blog Title</label>
<input type="text" 
required 
value = {title}
onChange ={(e) => setTitle(e.target.value)}
/>
<label >Blog content:</label>
<textarea 
    required
    value ={body}
    onChange ={(e) => setBody(e.target.value)}
    >
</textarea>
<label>Blog author:</label>
    <select
        value={author}
        onChange ={(e) => setAuthor(e.target.value)}
    >
        <option value="patryk">patryk</option>
        <option value="jan">jan</option>
    </select>
{!isPending && <button>Add Blog</button>}
{isPending && <button disabled>Loading...</button>}

</form>

     </div>
    );
}
 
export default Create;