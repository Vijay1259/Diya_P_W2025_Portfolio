import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <h2 className="resume-title">My Professional Journey</h2>
            <p className="resume-description">
                I am a passionate <strong>full-stack developer</strong> with expertise in 
                <span className="highlight-text"> web development, automation, and AI integrations</span>. 
                I specialize in designing robust applications to enhance efficiency and user experience.
            </p>
            
            <div className="resume-section">
                <h3>Education</h3>
                <p><strong>Computer Programming & Analysis</strong> - George Brown College, Toronto (2022 - 2025)</p>
                <p>Focused on software development, cloud computing, database management, and AI-driven automation.</p>
            </div>

            <div className="resume-section">
                <h3>Tech Stack</h3>
                <ul>
                    <li><strong>Languages:</strong> JavaScript, Python, SQL</li>
                    <li><strong>Frameworks:</strong> React.js, Node.js, Express.js</li>
                    <li><strong>Databases:</strong> MongoDB, Firebase</li>
                    <li><strong>DevOps:</strong> Docker, CI/CD Pipelines</li>
                </ul>
            </div>

            <div className="resume-section">
                <h3>Experience</h3>
                <p>Developed scalable applications, collaborated with cross-functional teams, and contributed to open-source projects.</p>
            </div>

            <div className="resume-section">
                <h3>Certifications</h3>
                <p>AWS Certified Cloud Practitioner, Google Cloud Essentials</p>
            </div>

            <a href="/Diya_Patel_Resume.pdf" className="resume-button">Download My Resume</a>
        </div>
    );
};

export default Resume;
