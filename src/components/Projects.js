import React from 'react';
import './Projects.css';
import { useNavigate } from 'react-router-dom';

const projects = [
    { id: "eventraze", title: "EventRaze", description: "Event management system with ticket booking.", techStack: "MERN", link: "https://comp3078.com/eventraze" },
    { id: "ecommerce", title: "E-Commerce Store", description: "Online store with Stripe integration.", techStack: "React, Firebase", link: "https://ecommerce-link.com" },
    { id: "aichatbot", title: "AI Chatbot", description: "Chatbot powered by OpenAI.", techStack: "Python, Flask", link: "https://diyaaichatbot-link.com" },
    { id: "assignment1", title: "Full-Stack Assignment 1", description: "Cloud-based infrastructure with Terraform.", techStack: "Terraform, Ansible", link: "https://assignment1-link.com" },
    { id: "assignment2", title: "Full-Stack Assignment 2", description: "Microservices event booking system.", techStack: "Spring Boot, Kafka", link: "https://assignment2-link.com" }
];

const Projects = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card" onClick={() => window.open(project.link, '_blank')}>
                        <div className="project-card-inner">
                            <div className="project-card-front">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-card-back">
                                <p><strong>Tech Stack:</strong> {project.techStack}</p>
                                <button className="cta-button">View Project</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
