import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (  

<footer className="footer">
    <div className="title">
        <p>The Patrick's blog</p>
    </div>
    <div className="footer-links">
        <Link to="/sp">Support</Link>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/create">Create new blog</Link>
    </div>
</footer>
);
}
 
export default Footer;