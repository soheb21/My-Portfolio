import React from "react";

import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import moviefy from "../images/react_img/a.png"
import Dr from "../images/react_img/Dr.png"
import Ai from "../images/react_img/Ai.png"
import ecom from "../images/react_img/ecom.png"
import expenseTracker from "../images/js_img/f.png"

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Project Section",
    subHeading: "Projects",
    text: "These all the projects are developed using Full/MERN stack",
  });
  const [state] = React.useState([
    {
      id: 5,
      poster: ecom,
      heading: "E-C (Ecommerce website)",
      desc: "This Project is an Ecommerce website comes with amazing features like admin panel and filters feature where user can buy the product or store in cart or even user can use payment method using Card or Cash .In these website we also have Admin panel where admin can add,delete or update the product even admin can share order informtion",
      tech: "React | NodeJS | Express | MongoDB | Passsport-JWT | Tailwind CSS | Passport Authentication | Stripe-Gateway | Postman | GitHub",
      deploy: "https://ecom-2l47.onrender.com/login",
      github: "https://github.com/soheb21/MERN-Ecommerce",
    },
    {
      id: 4,
      poster: Dr,
      heading: "Doctor-Appoinment-WebApp",
      desc: "This Project is Doctor Appointment System with admin panel where user apply for check-up by booking a particular Time Slot or User",
      tech: "React | NodeJS | Express | MongoDB | JWT | CSS | Bootstrap",
      deploy: "https://doctor-appointment-webapp.onrender.com/",
      github: "https://github.com/soheb21/Deployment-Doctor-appointment-webapp",
    },
    {
      id: 3,
      poster:Ai ,
      heading: "AI-Generator",
      desc: `AI-Generator comes with cool feature like Convert Text into Summarization, Generate JS Code, OpenAi API and Express and UI Design has made in ReactJS.
      - Working Login and Registration form with JWT(jsonwebtoken) for middleware and Bcrypt for
      password security and user Data is Stored in Cloud MongoDB Database with Hash Password
      provided by Bcrypt and for UI Design has made in ReactJS, and Registration and Login Form API
      has made in Express`,
      tech: "React | NodeJS | Express | MongoDB | JWT",
      deploy: "https://aigenerator-c9dn.onrender.com/",
      github: "https://github.com/soheb21/AI",
    },
   
    {
      id: 2,
      poster: moviefy,
      heading: "Moviefy",
      desc: "This project is Movie Web Site” where we can watch the latest movie's Trailer and Login/Sing Page with Payment Method",
      tech: "Using Api and Firebase",
      deploy: "https://moviefy-app.web.app/",
      github: "https://github.com/soheb21",
    },
    
    {
      id: 1,
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
                    border="2px solid white"
                  />
                </div>
                <div className="priceHeading projectName">{prices.heading}</div>

                <ul>
                  
                  <li className="priceHeading">{prices.desc.slice(0,140)+"..."}</li>

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
