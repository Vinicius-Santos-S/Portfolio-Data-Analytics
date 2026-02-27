import { useQuery } from "@tanstack/react-query"
import getData from "../../firebase"

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
            {data.map(project => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <p>{project.technology}</p>
                    <a href={project.link}>Ver projeto</a>
                </div>
            ))}
        </>
    )
}

export default Projects