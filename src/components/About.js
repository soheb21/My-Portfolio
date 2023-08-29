import React from "react";
import about_img from "../images/about.png"
const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "Full-Stack Web Developer",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Ansari Shoeb Sami Ahmed" },
    { id: 2, title: "Email:", text: "shoebashaikh@acpce.ac.in" },
    { id: 3, title: "Phone:", text: "+91 8452955876" },
    { id: 4, title: "Linkedin", text: "Shoeb Ahmed" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={about_img} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Hello! I'm Ansari Shoeb Ahmed , a passionate software engineer. I develop web applications, and learning to develope Full Stack app. My core skill is based on MERN-Stack and I love to do most of the things using MERN-Stack. I love to make the web more open to the world. Self-motivated and curious, with a keen interest in building user-centric products. Looking forward to honing skills in a challenging work environment.

              </div>
              <div className="about__info-p2">Feel Free to Contact me...</div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
