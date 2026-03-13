import { NavLink } from "react-router";
import HomeIcon from "../../assets/home_mobile.svg?react";
import AboutIcon from "../../assets/info_mobile.svg?react";
import ProjectsIcon from "../../assets/list_mobile.svg?react";
import MenuIcon from "../../assets/menu_mobile.svg?react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../Style/Especific Components/Navbar.scss"

function Navbar({ currentPage }) {
    const [isOpen, setIsOpen] = useState(false);
    const mobileNavRef = useRef(null);

    const sideBarAnimations = {
        show : {
            x: 0,
        },
        hide : {
            x : 180
        }
    }

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
                <div className="desktop-nav-bar-container" >
                    {
                        navBarContent.map((item, index) => (
                            <NavLink onClick={() => setIsOpen(false)} to={item.path} end key={index}>
                                <motion.div
                                    className="nav-bar-link"
                                    animate={{
                                        backgroundColor: item.path === currentPage ? "#1E1F1D" : "#E5E9DB",
                                    }}
                                    whileHover={{
                                        backgroundColor: item.path === currentPage ? "#1E1F1D" : "#d3d8c9"
                                    }}
                                >
                                    {item.icon && <item.icon style={{ fill: item.path === currentPage ? "#E5E9DB" : "#1E1F1D"}} className="mobile-icon" />}
                                    <motion.p
                                        animate={{
                                            color: item.path === currentPage ? "#E5E9DB" : "#1E1F1D"
                                        }}
                                    >
                                        {item.name}
                                    </motion.p>
                                </motion.div>
                            </NavLink>
                        ))
                    }
                </div>
                <MenuIcon className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)} />    
                <motion.div
                    ref={mobileNavRef}
                    className="mobile-side-bar-container"
                    variants={sideBarAnimations}
                    animate={ isOpen ? "show" : "hide"}
                    transition={{ duration: 0.3, type: "tween" }}
                >
                    {
                        navBarContent.map((item, index) => (
                            <NavLink onClick={() => setIsOpen(false)} to={item.path} end key={index}>
                                <motion.div
                                    className="nav-bar-link"
                                    animate={{
                                        backgroundColor : item.path === currentPage ? "#1E1F1D" : "#E5E9DB",                                        
                                    }}
                                >
                                    {item.icon && <item.icon style={{ fill : item.path === currentPage ? "#E5E9DB" : "#1E1F1D"}} className="mobile-icon" />}
                                    <motion.p
                                        animate={{
                                            color: item.path === currentPage ? "#E5E9DB" : "#1E1F1D"
                                        }}    
                                    >{item.name}
                                    </motion.p>
                                </motion.div>
                            </NavLink>
                        ))
                    }
                </motion.div>    
            </div>
        </nav>
    )
}

export default Navbar