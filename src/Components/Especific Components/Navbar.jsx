import { NavLink } from "react-router";
import HomeIcon from "../../assets/home_mobile.svg?react";
import AboutIcon from "../../assets/info_mobile.svg?react";
import ProjectsIcon from "../../assets/list_mobile.svg?react";
import MenuIcon from "../../assets/menu_mobile.svg?react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../Style/Especific Components/Navbar.scss"

function Navbar({currentPage}) {
    const [isOpen, setIsOpen] = useState(false);
    const mobileNavRef = useRef(null);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(mobileNavRef);

    const navBarContent = [
        { name: "Home", path: "/home", icon: HomeIcon },
        { name: "About", path: "/about", icon: AboutIcon },
        { name: "Projects", path: "/projects", icon: ProjectsIcon }
    ]


    return (
        <nav className="nav-bar">
            <div className="nav-bar-content">
                <h1>Naooto</h1>
                <div className="desktop-nav-bar-content">
                    <NavLink className="nav-bar-link" to="/home" end>Home</NavLink>
                    <NavLink className="nav-bar-link" to="/about" end>About</NavLink>
                    <NavLink className="nav-bar-link" to="/projects">Projects</NavLink>
                </div>
                {/* <div onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">mobilebutton</div> */}
                <MenuIcon className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}/>
                <AnimatePresence>
                        {
                            isOpen &&        
                                <motion.div 
                                    ref={mobileNavRef} 
                                    className="mobile-nav-bar-content"
                                    initial={{ x: 220 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: 220 }}
                                    transition={{ duration: 0.3, type: "tween" }}
                                >
                                    {
                                        navBarContent.map((item, index) => (
                                            <NavLink onClick={() => setIsOpen(false)} to={item.path} end key={index}>
                                                <motion.div 
                                                    className="nav-bar-link"
                                                    animate={{
                                                        backgroundColor: currentPage === item.path ? "#1f1f1f" : "transparent",
                                                    }}
                                                    whileHover={{
                                                        backgroundColor: "#1f1f1f",
                                                    }}    
                                                >
                                                    {item.icon && <item.icon className="mobile-icon"/>}
                                                    <p>{item.name}</p>
                                                </motion.div>
                                            </NavLink>
                                        ))
                                    }
                                </motion.div>   
                        }
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar