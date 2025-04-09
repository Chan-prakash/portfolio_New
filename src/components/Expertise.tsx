import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faAws, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFullStack = [
    "HTML", "Bootstrap","HTML", "CSS", "JavaScript", "Spring", "Hibernate","React",
    "Java", "MySQL","PostgreSQL", "Git", "GitHub","Vscode",
];

const labelsUIUX = [
    "Figma", "Canva", "Spline", "Photoshop"
];

const labelsSolutionArch = [
    "AWS", "DevOps", "Docker", "Kubernetes"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Java FullStack Developer</h3>
                    <p>Proficient in Java programming, object-oriented design, and building robust applications with optimized performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFullStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>UI/UX Designer</h3>
                    <p>Designed visually appealing and functional interfaces for web and mobile projects, including app and website designs for college events and academic projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Design Tools:</span>
                        {labelsUIUX.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Solution Architect</h3>
                    <p>Proficient in designing scalable and secure architectures leveraging AWS services, ensuring optimal workflows, and seamlessly integrating technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSolutionArch.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
