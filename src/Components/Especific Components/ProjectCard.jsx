import "../../Style/Especific Components/projectCard.scss"
import { motion } from "motion/react"

function ProjectCard(projectData) {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
        >
            <h2>{projectData.dataTunnel.name}</h2>
            <p>{projectData.dataTunnel.description}</p>
            <p>{projectData.dataTunnel.technology}</p>
            <a href={projectData.dataTunnel.link}>Ver projeto</a>
        </motion.div>
    )
}
export default ProjectCard