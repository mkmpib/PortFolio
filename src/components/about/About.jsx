import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/mohitp.jpg';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt=""  width={400} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> Aspiring software developer with a strong foundation in fullstack developement. Passionate about building innovative solutions and continuously learning new technologies.</p>
                        <p>
                            I am a motivated and dedicated individual seeking to apply my skills and knowledge in a dynamic work environment where I can contribute to exciting projects and grow as a professional.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML</p>
                            <hr style={{width:"400px"}} />
                            <p>85%</p>
                        </div>
                        <div className="about-skill">
                            <p>CSS</p>
                            <hr style={{width:"350px"}} />
                            <p>80%</p>
                        </div>
                        <div className="about-skill">
                            <p>BOOTSTRAP</p>
                            <hr style={{width:"330px"}} />
                            <p>70%</p>
                        </div>
                        <div className="about-skill">
                            <p>JAVASCRIPT</p>
                            <hr style={{width:"340px"}} />
                            <p>74%</p>
                        </div>
                        <div className="about-skill">
                            <p>CPP</p>
                            <hr style={{ width: "330px" }} />
                            <p>70%</p>
                            
                        </div>
                        
    
                    </div>
                </div>
                <div className="about-achievements"></div>
            </div>
          
        </div>
      
    )
}

export default About;