import { motion } from "motion/react"
import { NavLink } from "react-router";
import "../Style/About.scss"


function About() {

    return (
        <motion.div 
            className="about-container routePage"
            id="about"
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="about-header">
                <div className="about-content">
                    <p className="my-name">My name is</p>
                    <h1>Vinicius Santos Silva</h1>
                    <div className="about-text">
                        <p>I am a Data Science student at FIAP with a strong interest in data analysis and problem solving. I am developing skills in data collection, cleaning, analysis, and visualization to transform raw data into meaningful insights that support decision-making.</p>
                        <p>I have experience working with data manipulation, reports, and dashboards, and I enjoy exploring data to identify patterns and opportunities. I am continuously improving my knowledge in statistics, programming, and data analytics, applying what I learn through practical projects.</p>
                        <p>I am motivated by challenges and always looking to grow professionally in the field of Data Science and Analytics.</p>
                        <NavLink className="projects-link-container" to="/projects" end>
                            <motion.div
                                className="projects-link"
                                whileHover={{
                                    backgroundColor:"#d3d8c9",
                                }}
                            >
                                See my Projects
                            </motion.div>
                        </NavLink>
                    </div>
                </div>
                <div className="image"/>
            </div>
        </motion.div>
    )
}

export default About