

import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Footer.css";
import logo from "../Assets/img/logo2.svg";

const Footer = () => {
    return (
        <footer >
           <div className="footer-container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et mauris placerat, volutpat arcu vel, imperdiet turpis. Etiam volutpat luctus nunc</p>
            <div className="links-container">
                <Link to="/" className="footer-link">Home</Link> <hr />
                <Link to="/About" className="footer-link">About Us</Link> <hr />
                <Link to="/Services" className="footer-link">Services</Link> <hr />
                <Link to="/" className="footer-link">Products</Link> <hr />
                <Link to="/Reviews" className="footer-link">Reviews</Link> <hr />
                <Link to="/Faqs" className="footer-link">FAQ’s</Link> <hr />
                <Link to="/Contact" className="footer-link">Contact Us</Link>
            </div>

            </div>
            <hr className="footer-hr" />
            <div className="copy">
                <h2>Terms & Condition Privacy Policy Return Policy</h2>
                <h2>Copyright © 2020 First Charge.</h2>

            </div>

        </footer>
    );
};

export default Footer;
