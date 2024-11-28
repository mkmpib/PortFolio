import React ,{useState,useRef}from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right = "0";//display nev bar when responsive in phone
    }
      const closeMenu = () => {
        menuRef.current.style.right = "-350px";// hode navbar in phone
      };
    return (
      // moving cursor
      //   <div className="navbar">
      //       <img src={logo} alt="" width={90} />
      //       <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      //       <ul ref={menuRef} className="nav-menu">
      //           <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
      //           <li> <AnchorLink className="anchor-link" offset={50} href="#home"> <p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}/>:<></>}</li>
      //           <li><AnchorLink className="anchor-link" offset={50} href="#about"> <p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline}/>:<></>}</li>
      //           <li><AnchorLink className="anchor-link" offset={50} href="#education"><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu==="education"?<img src={underline}/>:<></>}</li>
      //           <li><AnchorLink className="anchor-link" offset={50} href="#project"><p onClick={()=>setMenu("project")}>Projects</p></AnchorLink>{menu==="project"?<img src={underline}/>:<></>}</li>
      //           <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline}/>:<></>}</li>
      //       </ul>
      //       <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With me</AnchorLink></div>
      //  </div>

      // routes
        <div className="navbar">
            <img id='r1' src={logo} alt="" width={90} />
            <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                       <li><NavLink className="nav-link active" to="/">
          Home
       </NavLink></li>
       <li><NavLink className="nav-link" to="/About">
         About
       </NavLink></li>
       <li><NavLink className="nav-link" to="/Education">
         Education
       </NavLink></li>
       <li><NavLink className="nav-link" to="/Project">
         Projects
       </NavLink></li>
       <li><NavLink className="nav-link" to="/Contact">
         Contact 
       </NavLink></li>

            </ul>
            <div className="nav-connect"><NavLink className="nav-link"  to="/contact">Connect With me</NavLink></div>
       </div>

      
    );
}

export default Navbar;