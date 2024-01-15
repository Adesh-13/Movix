import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

function redirect(){
    window.location.href = "https://www.instagram.com/adesh_newaskar";
}
const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Watching series and movies offers a multifaceted source of entertainment and enrichment. First and foremost, they provide an escape from the rigors of daily life, allowing viewers to immerse themselves in captivating narratives and explore new worlds. Beyond mere escapism, these forms of storytelling can be educational and thought-provoking, shedding light on diverse cultures, historical events, and human experiences. They foster empathy by allowing us to see the world through different perspectives, and they often address complex issues, sparking meaningful discussions. 
                </div>
                <div className="infoTextt">
                All Rights Reserved.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;