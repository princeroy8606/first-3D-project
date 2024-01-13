import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box w-fit">
    <p className="font-small sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn w-full flex">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi , Iam <span className="font-bold">Prince</span>
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "React Hook useEffect has missing dependencies: 'handleKeyDown' and 'handleKeyUp'. Either include them or remove the dependency array"
      }
      link={"/about"}
      btnText={"Learn More"}
    />
  ),
  3: (
    <InfoBox
      text={
        "React Hook useEffect has missing dependencies: 'handleKeyDown' and 'handleKeyUp'. Either include them or remove the dependency array"
      }
      link={"/about"}
      btnText={"Learn More"}
    />
  ),
  4: (
    <InfoBox
      text={
        "React Hook useEffect has missing dependencies: 'handleKeyDown' and 'handleKeyUp'. Either include them or remove the dependency array"
      }
      link={"/about"}
      btnText={"Learn More"}
    />
  ),
};
const HomeInfo = ({ currentStage }) => {
  console.log(currentStage);
  return renderContent[currentStage];
};

export default HomeInfo;
