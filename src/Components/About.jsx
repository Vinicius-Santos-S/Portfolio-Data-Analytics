import { motion } from "motion/react"
import { NavLink } from "react-router";
import "../Style/About.scss"

function About() {

    return (
        <motion.div 
            className="about-container" 
            id="about"
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="image"/>
            <div className="about-text">
                <h1>About me!</h1>
                <hr />
                <p>I am a Data Science student at FIAP with a strong interest in data analysis and problem solving. I am developing skills in data collection, cleaning, analysis, and visualization to transform raw data into meaningful insights that support decision-making.</p>
                <p>I have experience working with data manipulation, reports, and dashboards, and I enjoy exploring data to identify patterns and opportunities. I am continuously improving my knowledge in statistics, programming, and data analytics, applying what I learn through practical projects.</p>
                <p>I am motivated by challenges and always looking to grow professionally in the field of Data Science and Analytics.</p>
                <NavLink className="projects-link-container" to="/projects" end>
                    <motion.div
                        className="projects-link"
                        whileHover={{
                            backgroundColor:"#f2f2f2",
                            color: "#242424",
                        }}
                    >
                        See my Projects
                    </motion.div>
                </NavLink>
            </div>
        </motion.div>
    )
}

export default About