import { useQuery } from "@tanstack/react-query"
import { motion } from "motion/react"
import getData from "../../firebase"
import ProjectCard from "./Especific Components/ProjectCard"
import "../Style/Projects.scss"

function Projects() {
    const {isPending, isError, data } = useQuery({    
        queryKey: ["ProjectsData"], 
        queryFn: () => getData("projects")
    })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {isError.message}</span>
    }
    
    return (
        <div className="projects-container" id="projects">
            <div className="projects-header">
                <h1>Projects</h1>
                <div/>
                <p>Come take a look at my projects</p>
            </div>
            <motion.div className="project-grid">
                {data.map(projectData => (
                    <ProjectCard key={projectData.id} dataTunnel={projectData}/>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects