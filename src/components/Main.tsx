import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TypeAnimation } from 'react-type-animation';
import '../assets/styles/Main.scss';
import ProfileImage from '../assets/images/photo.jpg'; 

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfileImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Chan-prakash" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/chandrakanth-prakash-68b28b253" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>

          <h1>Chandrakanth</h1>

          <TypeAnimation
            sequence={[
              'Java Full Stack Engineer', 2000,
              'Solution Architect', 2000,
              'Web Designer', 2000
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="animated-text"
          />

          <div className="mobile_social_icons">
            <a href="https://github.com/Chan-prakash" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/chandrakanth-prakash-68b28b253" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
