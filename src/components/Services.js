import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { DiJavascript1 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiRedux, SiExpress } from "react-icons/si";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "My Skills",
    text: "I am passionate about tech and keen to learn new technology and skills...",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaReact className="commonIcons" />,
      heading: "React",
    },
    {
      id: 2,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "HTML",
    },
    {
      id: 3,
      icon: <FaCss3Alt className="commonIcons" />,

      heading: "CSS",
    },
    {
      id: 4,
      icon: <FaBootstrap className="commonIcons" />,
      heading: "Bootstrap",
    },
    {
      id: 5,
      icon: <DiJavascript1 className="commonIcons" />,
      heading: "Javascript",
    },
   

  ]);
  return (
    <div className="services skills">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
