import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import what from "../../assets/what.jpg";
import twit from "../../assets/twit.jpg";
import fb from "../../assets/fb.jpg";
import instra from "../../assets/instra.jpg";
import phone from "../../assets/phone.jpg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" width={100} />
          <p>Mohit Kumar</p>
        </div>
        <div className="footer-top-right">
          <a href="https://www.instagram.com/mkmpib?igsh=azQ1Y3cydmgybjlv">
            <img src={instra} alt="" width={50} />
          </a>

          <img src={what} alt="" width={50} />
          <img src={fb} alt="" width={50} />
          <img src={twit} alt="" width={50} />
          <img src={phone} alt="" width={50} />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bootom-left">
          {" "}
          © 2024 Mohit Kumar.All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
