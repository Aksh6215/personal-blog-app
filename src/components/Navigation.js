// components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Post</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
