import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Chan-prakash" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/chandrakanth-prakash-68b28b253" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>
          📧 Email: <a href="mailto:chan26prakash@gmail.com">chan26prakash@gmail.com</a>
        </p>
      <p>A portfolio designed & built by <a href="https://github.com/Chan-prakash" target="_blank" rel="noreferrer">chan prakash</a> with 💜</p>
    </footer>
  );
}

export default Footer;