import { useState } from "react";
const Support = () => {

const [email, setEmail] = useState('patryk.zawieja24@gmail.com');
const [isClicked,setIsClicked] = useState(false);

const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
}

const handleSubmit= (e) => {
    e.preventDefault();
    setIsClicked(false)
}

    return ( 
<div className="support">
    <h1>Support</h1>
    <article>
        Hello welcome to support department, if you wanna contact with me just send me a message on email: {email}. 
    <p>I hope that you enjoy my project, it is my first project with React.JS</p>
    </article>

    {!isClicked && <button onClick={handleClick}>Change email</button>}
    {isClicked && <button onClick={handleClick}>Disable</button>}


    {isClicked && <div>
        <form onSubmit={handleSubmit}>  
        <label>Change email</label>
        <button>Save changes</button>
        <input type="email" 
        required 
        value = {email}
        onChange ={(e) => setEmail(e.target.value)}/>
        </form>
    </div>}
</div>

 );
}
 
export default Support;