import { useQuery } from "@tanstack/react-query"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import getData from "../../firebase"
import ProjectCard from "./Especific Components/ProjectCard"
import "../Style/Projects.scss"

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
        <motion.div 
            className="projects-container routePage" 
            id="projects"
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="projects-header ">
                <h1>Projects</h1>
                <p>Come take a look at my projects</p>
            </div>
            <hr />
            <ul className="projects-filter-container">
                {
                    uniqueTechnologies.map(techName => (
                        <motion.li
                            animate={{
                                backgroundColor: selectedTech === techName ? "#1E1F1D" : "#E5E9DB",
                                color: selectedTech === techName ? "#E5E9DB" : "#1E1F1D"
                            }} 
                            whileHover={{ 
                                backgroundColor: "#d3d8c9",
                                color: "#1E1F1D"
                            }}
                            onClick={onClick}
                            item={techName}
                            key={techName}
                        >
                            {techName}
                        </motion.li>
                    ))
                }
            </ul>
            <motion.div className="project-grid" layout>
                <AnimatePresence>
                    {
                        filteredProjects.map(projectData => (
                            <ProjectCard key={projectData.id} dataTunnel={projectData} layout/>
                        )) 
                    }   
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}

export default Projects