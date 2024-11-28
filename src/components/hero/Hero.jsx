import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from "react-router-dom";
const Hero = () => {
    return (
      <div id="home" className="hero">
        <img src={profile_img} alt="" width={300} />
        <h1>
          {" "}
          <span>I'm Mohit Kumar,</span> fullstack developer.
        </h1>
        <p>
          I am excited to start my professional journey and am looking for
          opportunities where I can contribute my skills, learn from experienced
          colleagues, and grow within a dynamic and innovative environment.
        </p>
        <div className="hero-action">
          {/* <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With me</AnchorLink></div> */}
          <div className="nav-connect">
            <NavLink className="nav-link" to="/contact">
              Connect With me
            </NavLink>
          </div>
          <div className="hero-resume">
            <a href="http://127.0.0.1:5500/resumeUsingH.html">My Resume</a>
          </div>
        </div>
      </div>
    );
}

export default Hero;