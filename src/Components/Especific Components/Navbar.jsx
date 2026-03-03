import { NavLink } from "react-router";
import { useState } from "react";
import "../../Style/Especific Components/Navbar.scss"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="nav-bar">
            <div className="nav-bar-content">
                <h1>Naooto</h1>
                <div className="desktop-nav-bar-content">
                    <NavLink className="nav-bar-link" to="/home" end>Home</NavLink>
                    <NavLink className="nav-bar-link" to="/about" end>About</NavLink>
                    <NavLink className="nav-bar-link" to="/projects">Projects</NavLink>
                </div>
                <div className="mobile-menu-button">mobilebutton</div>
                <div className="mobile-nav-bar-content">
                        <NavLink className="nav-bar-link" to="/home" end>Home</NavLink>
                        <NavLink className="nav-bar-link"to="/about" end>About</NavLink>
                        <NavLink className="nav-bar-link"to="/projects">Projects</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar