import react from 'react';
import './Project.css';
import theme_pattern from '../../assets/theme_pattern.svg'

const Project = () => {
    return (
      <div id="project" className="project">
        <div className="education-title">
          <h1> My Project</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </div>
    );
}
export default Project;