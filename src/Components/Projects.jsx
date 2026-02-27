import { useQuery } from "@tanstack/react-query"
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
        <>
            <h1>teste</h1>
            <div className="project-grid">
                {data.map(projectData => (
                    <ProjectCard key={projectData.id} dataTunnel={projectData}/>
                ))}
            </div>
        </>
    )
}

export default Projects