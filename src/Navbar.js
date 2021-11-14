import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 

    <nav className="navbar">
        <h1>The Patrick's blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">Add new blog</Link>
            <Link to="/">Show all blogs</Link>
            <Link  to="/create">See world's map</Link>
        </div>
    </nav>
    );
}
 
export default Navbar;