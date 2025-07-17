import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import suryaImage from '../assets/images/SuryaPic.jpg';

// Define the props type
interface MainProps {
  mode: string;
}

function Main({ mode }: MainProps) {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={suryaImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/surya-ravula/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Surya Ravula</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/surya-ravula/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;