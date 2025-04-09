import React from "react";
import cloudvault from '../assets/images/cloudVaultpng.png';
import sneakershub from '../assets/images/sneakerhub.png';
import nomizo from '../assets/images/nomixo.png';
import grainyx from '../assets/images/grainyX.png';
import portfolio from '../assets/images/portfoliodesign.png'; // New image for portfolio
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>My Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://github.com/Chan-prakash/CloudVault" target="_blank" rel="noreferrer">
                        <img src={cloudvault} className="zoom" alt="CloudVault thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/Chan-prakash/CloudVault" target="_blank" rel="noreferrer">
                        <h2>CloudVault</h2>
                    </a>
                    <p>
                        A secure cloud storage platform built using PHP, MySQL, HTML, CSS, and JavaScript. 
                        Implemented user authentication, file upload, download, and sharing functionalities. 
                        Focused on data privacy and user access control. 
                        Designed a user-friendly interface to simplify file operations for all users.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/Chan-prakash/SneakersHub" target="_blank" rel="noreferrer">
                        <img src={sneakershub} className="zoom" alt="SneakersHub thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/Chan-prakash/SneakersHub" target="_blank" rel="noreferrer">
                        <h2>SneakersHub</h2>
                    </a>
                    <p>
                        An e-commerce web platform for sneaker lovers built with HTML, CSS, JS, and Bootstrap. 
                        Integrated product listing, category filters, and shopping cart functionality. 
                        Emphasized responsive design and user-friendly layout. 
                        Worked on UI enhancements and improving page load speed.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/Chan-prakash/nomizo" target="_blank" rel="noreferrer">
                        <img src={nomizo} className="zoom" alt="Nomizo thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/Chan-prakash/nomizo" target="_blank" rel="noreferrer">
                        <h2>NOMIZO'24 Symposium Website</h2>
                    </a>
                    <p>
                        Developed and launched the official website for NOMIZO’24 symposium. 
                        Technologies used include HTML, CSS, JavaScript, and deployment on Vercel. 
                        Ensured cross-browser compatibility and mobile responsiveness. 
                        Managed GitHub repo for version control and collaboration.
                    </p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/proto/6rThsMifE0ufhiD9AgKSlJ/Grainyx?node-id=0-1&t=fVDVa3zLGuYkRofd-1" target="_blank" rel="noreferrer">
                        <img src={grainyx} className="zoom" alt="GrainyX UI thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/proto/6rThsMifE0ufhiD9AgKSlJ/Grainyx?node-id=0-1&t=fVDVa3zLGuYkRofd-1" target="_blank" rel="noreferrer">
                        <h2>GrainyX UI (Figma)</h2>
                    </a>
                    <p>
                        A mobile UI/UX design project aimed at connecting farmers directly with customers. 
                        Designed using Figma with a focus on intuitive flows and clear navigation. 
                        Included features like product listing, price negotiation, and chat. 
                        Submitted as part of SIH idea submission round for agri-tech innovation.
                    </p>
                </div>

                <div className="project">
                    <a href="https://chanprakash.com" target="_blank" rel="noreferrer">
                        <img src={portfolio} className="zoom" alt="Portfolio Design thumbnail" width="100%" />
                    </a>
                    <a href="https://chanprakash.com" target="_blank" rel="noreferrer">
                        <h2>Personal Portfolio Website</h2>
                    </a>
                    <p>
                        A responsive personal portfolio designed and developed to showcase my projects and skills. 
                        Built using HTML, CSS, and deployed via GitHub Pages and Vercel. 
                        Emphasized clean UI/UX with smooth scroll, animations, and accessibility. 
                        Included interactive sections for About, Skills, Projects, and Contact.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
