import "../../Style/Especific Components/projectCard.scss"
import { motion } from "motion/react"
import { useState } from "react"
import OpenInNewIcon from "../../assets/open_in_new.svg?react";


function ProjectCard({ dataTunnel }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href={dataTunnel.link} target="_blank" rel="noopener noreferrer">
            <motion.div
                className="project-card-container"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                animate={{ scale: isHovered ? 1.05 : 1 }}
                style={{
                    backgroundImage: `url(https://l02pw9kshspbq2zg.public.blob.vercel-storage.com/raf%2C360x360%2C075%2Ct%2Cfafafa_ca443f4786.u3.jpg)`,
                }}
            >
                <motion.div 
                    className="project-card-content"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                >
                    <div className="project-card-info">
                        <div className="project-card-header">
                            <h2>{dataTunnel.name}</h2>
                            <OpenInNewIcon
                                className="open-in-new-icon"
                            />
                        </div>
                        <p>{dataTunnel.description}</p>
                        <ul>     
                            {dataTunnel.technologies.map((tech, index) => (
                                <li 
                                    key={index}
                                    style={{
                                        color: "#f2f2f2",
                                        backgroundColor: tech.techColor
                                    }}
                                >
                                    {tech.techName}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </a>
    )
}
export default ProjectCard