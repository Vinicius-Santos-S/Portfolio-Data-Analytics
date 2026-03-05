import { motion } from "motion/react"
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
            <div className="about-header">
                <h1>About Me</h1>
                <div/>
                <p>Come take a look at my projects</p>
            </div>
        </motion.div>
    )
}

export default About