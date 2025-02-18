// Updated expertise with new skills
import React from 'react';
import '../assets/styles/Expertise.scss';

function Expertise() {
  return (
    <div id='expertise'>
      <div className='items-container'>
        <div className='expertise_wrapper'>
          <h1>Expertise</h1>
          <div className='expertise-grid'>
            <div className='expertise-item'>
              <h3>Frontend Development</h3>
              <p>React, TypeScript, JavaScript, HTML5, CSS3, SCSS</p>
            </div>
            <div className='expertise-item'>
              <h3>Backend Development</h3>
              <p>Node.js, Python, Ruby on Rails, Flask, Express</p>
            </div>
            <div className='expertise-item'>
              <h3>Game Development</h3>
              <p>Unity, C#, 2D/3D Game Design, Itch.io Publishing</p>
            </div>
            <div className='expertise-item'>
              <h3>Data Science</h3>
              <p>Python, Pandas, Scikit-learn, Multiple Regression Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
