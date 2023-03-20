import React from "react";

import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import moviefy from "../images/react_img/a.png"
import amazonClone from "../images/react_img/b.png"
import expenseTracker from "../images/js_img/f.png"
import Pk from "../images/react_img/pk.png"
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Project Section",
    subHeading: "Projects",
    text: "These all the projects are developed using HTML CSS JS REACT",
  });
  const [state] = React.useState([
    {
      id: 1,
      poster: moviefy,
      heading: "Moviefy",
      desc: "This project is Movie Web Site” where we can watch the latest movie's Trailer and Login/Sing Page with Payment Method",
      tech: "Using Api and Firebase",
      deploy: "https://moviefy-app.web.app/",
      github: "https://github.com/soheb21",
    },
    
    {
      id: 2,
      poster: Pk,
      heading: "Project Keeper",
      desc: `This Website work as a Projects Container platform.
      It's use for Sharing/Showing Projects that anyone
      can see working project with source code.`,
      tech: "React | Firebase | HTML| SCSS | JS",
      deploy: "https://project-manager-58910.web.app/",
      github: "https://github.com/soheb21/",
    },
    {
      id: 4,
      poster: expenseTracker,
      heading: "Expense Tracker",
      desc: "This website is use when a user want to track is Expenses” in which I implemented some cool functionalities like how we can add or remove data or when user enter the text and amount it'll store in local storge that provided by JS",
      tech: "HTML CSS ADVANCE JS",
      deploy: "https://expensetracker-cde2c.web.app",
      github: "https://github.com/soheb21/HTML-CSS-JS/tree/master/JavaSript/Project-8-Expense-Tracker",
    },
   
  ]);
  return (
    <div className="prices project">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="price__rs">
                  <img
                    src={prices.poster}
                    alt="poster"
                    heigh="50px"
                    width="100%"
                    border="10px solid white"
                  />
                </div>
                <div className="priceHeading projectName">{prices.heading}</div>

                <ul>
                  <li className="priceHeading">{prices.desc}</li>

                  <li>{`Tech Stack: ${prices.tech}`}</li>
                </ul>
                <div className="price__btn">
                  <a
                    href={prices.deploy}
                    target="_blank"
                    className="link1 btn btn-outline1"
                  >
                    <ImNewTab fontSize="1rem" /> Deploy Link
                  </a>
                  <a
                    href={prices.github}
                    target="_blank"
                    className="btn btn-outline1"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
