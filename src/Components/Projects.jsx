import { useQuery } from "@tanstack/react-query"
import { motion } from "motion/react"
import { useState } from "react"
import getData from "../../firebase"
import ProjectCard from "./Especific Components/ProjectCard"
import "../Style/Projects.scss"
import { li } from "motion/react-client"

function Projects() {
    const [selectedTech, setSelectedTech] = useState(null)

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

    const onClick = (event) => {
        if (event.target.getAttribute("item") === selectedTech) {
            console.log("same")
            setSelectedTech(null)
        } 
        else {
            console.log("notsame")
            const item = event.target.getAttribute("item")
            setSelectedTech(item)
        }
    }

    const uniqueTechnologies = [    
        ...new Set(
            data.flatMap(project =>
                project.technologies?.map(
                    tech => tech.techName.trim()
                ) || []
            )   
        )
    ]

    const filteredProjects = selectedTech ? data.filter(project => project.technologies.some(tech => tech.techName === selectedTech)) : data

    return (
        <div className="projects-container" id="projects">
            <div className="projects-header">
                <h1>Projects</h1>
                <div/>
                <p>Come take a look at my projects</p>
            </div>
            <ul>
                {
                    uniqueTechnologies.map(techName => (
                        <motion.li
                            animate={{
                                backgroundColor: selectedTech === techName ? "#007bff" : "#f8f9fa",
                            }} 
                            whileHover={{ backgroundColor: "#007bff" }}
                            onClick={onClick}
                            item={techName}
                            key={techName}
                        >
                            {techName}
                        </motion.li>
                    ))
                }
            </ul>
            <motion.div className="project-grid">
                {filteredProjects.map(projectData => (
                    <ProjectCard key={projectData.id} dataTunnel={projectData}/>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects