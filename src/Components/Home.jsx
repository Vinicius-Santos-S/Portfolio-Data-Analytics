import { motion } from "motion/react"
import { NavLink } from "react-router";
import GithubIcon from "../assets/github.svg?react"
import LinkedinIcon from "../assets/linkedin.svg?react"
import EmailIcon from "../assets/envelope-at-fill.svg?react"
import "../Style/Home.scss"
import "../_style.scss"

function Home() {
    const socialData = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/vini-santos-silva/",
            svg: <LinkedinIcon className="social-icon" />
        },
        {
            name: "GitHub",
            url: "https://github.com/Vinicius-Santos-S",
            svg: <GithubIcon className="social-icon" />
        },
        {
            name: "Email",
            url: "mailto:santossilvavinicius0@gmail.com",
            svg: <EmailIcon className="social-icon" />
        }
    ]

    return (
        <motion.div 
            className="home-container routePage"
            id="home"
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="home-header">
                <ul className="social-content">
                    {socialData.map((social, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.2 }}
                        >
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                                {social.svg}
                            </a>
                        </motion.li>
                    ))}
                </ul>
                <div className="home-content">
                    <h1 className="home-title">Welcome to my Portfolio!</h1>
                    <hr />  
                    <p className="home-description">Here you will find some of my projects and studies in Data Science and Data Analysis. This space was created to share my learning journey, my skills with data, and the solutions I have been developing along the way.</p>
                    <p>Feel free to explore the projects and follow my growth in the world of data. 🔥</p>
                </div>
                <NavLink className="about-link-container" to="/about" end>
                    <motion.div
                        className="about-link"
                        whileHover={{
                            backgroundColor: "#d3d8c9"
                        }}
                        >
                        More About Me
                    </motion.div>
                </NavLink>    
            </div>
        </motion.div>
    )
}

export default Home