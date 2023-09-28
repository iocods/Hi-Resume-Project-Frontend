import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
    const date = new Date();
  return <footer>
    <div className="footer-div">
        <div className="connect">
            <div className="link-div">
                <Link>
                    <FaFacebook className="icons"/>
                </Link>
                <Link>
                    <FaTwitter className="icons"/>
                </Link>
                <Link>
                    <FaLinkedin className="icons"/>
                </Link>
                <Link>
                    <FaTelegram className="icons"/>
                </Link>
            </div>
            <div>
                <div>
                    <p>Email: Hiresume@gmail.com</p>
                    <p style={{display: "inline"}}>Tel: <a style={{display: "inline"}} href="tel:+2347052472406" className="telephone-link">+2347052472406</a></p>
                </div>
            </div>
        </div>
        <div>
            <p>Resume</p>
            <Link>My Resume</Link>
            <Link>Create</Link>
        </div>
        <div>
            <p>CVs</p>
            <Link>My Cvs</Link>
            <Link>Create</Link>
            <Link>How to create a good Cv</Link>
        </div>
        <div>
            <p>Cover Letters</p>
            <Link>My Cover Letters</Link>
            <Link>Create</Link>
            <Link>Benefit of a good Cover Letters</Link>
        </div>
    </div>
    <p className="copyright-paragraph">{`Copyright ${date.getFullYear()}, all rights reserved`}</p>
  </footer>;
};

export default Footer;
