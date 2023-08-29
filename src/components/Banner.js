import React from "react";
import { Link } from "react-scroll";
import cv from "../shoeb_cv.pdf"

import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import bannerimg from "../images/bbg.png"
const Banner = () => {
  const [state] = React.useState({
    title: "I am Ansari Shoeb",
    text: " Full / MERN stack  Web Developer",
  });
  return (
    <header className="header home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <a
                    href="https://www.linkedin.com/in/soheb-ahmed-shaikh-871b7320b/"
                    target="_blank"
                  >
                    <li>
                      <FaLinkedin className="contactIcon" />
                    </li>
                  </a>
                  <a href="https://github.com/soheb21" target="_blank">
                    <li>
                      <FaGithub className="contactIcon" />
                    </li>
                  </a>
                  <a href="https://www.instagram.com/itz_shoeb3707/"  target="_blank">
                    <li>
                      <FaInstagram className="contactIcon" />
                    </li>
                  </a>

                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a
                    href={cv}
                    target="_blank"
                    className="btn btn-outline"
                  >
                    Get Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <Link spy={true} smooth={true} duration={500} to={"about"}>
                    <a href="" className="btn btn-smart">
                      {/* <FaPlay className="play" /> */}
                      About Me
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={bannerimg} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
