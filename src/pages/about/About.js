import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";
import { FaPhoenixSquadron } from "react-icons/fa";
const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>BetyBds<FaPhoenixSquadron style={{ color: "darkred", fontSize: "30px" }} /></span>{" "}
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am BetyBds</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h2>
          <a href="mailto:bbaydas85@gmail.com">Send email</a> :
          bbaydas85@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};
export default About;
