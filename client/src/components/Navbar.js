import React from "react";
// import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <div className="header">
            <div className="logo">LOGO</div>
            <nav>
                <a href="#home" class="nav-item">Home</a>
                <a href="#about" class="nav-item">About</a>
                <a href="#contact" class="nav-item">Contact</a>
            </nav>
        </div>

    )
}

export default Navbar