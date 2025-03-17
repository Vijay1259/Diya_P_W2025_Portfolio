import React from 'react';
import './Skills.css';

const skills = [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "🚀" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express.js", icon: "🔗" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Cloud Deployment", icon: "☁️" },
    { name: "Git & GitHub", icon: "🐙" }
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>My Tech Stack</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <span className="skill-icon">{skill.icon}</span>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
