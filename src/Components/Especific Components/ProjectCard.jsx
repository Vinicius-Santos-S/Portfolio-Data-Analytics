import "../../Style/Especific Components/projectCard.scss"
import { motion } from "motion/react"
import { useState } from "react"
import OpenInNewIcon from "../../assets/open_in_new.svg?react";


function ProjectCard({ id, dataTunnel }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            layout 
            href={dataTunnel.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card-container"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{  opacity: 1, scale: isHovered ? 1.05 : 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
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
        </motion.a>
    )
}
export default ProjectCard