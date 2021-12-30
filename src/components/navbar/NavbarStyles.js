import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  //background-image: linear-gradient(to bottom, #feada6 50%, #f5efef 100%);
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  //background-color:#e5b8b7;
  border-radius: 0 0 3px 3px;
  height: 75px;
  font-size: 2rem;
  /* background-image: url("../../assets/valentines-day-g9a9258fc6_1920.jpg");
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 100px;
  width: auto; */
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: "Indie Flower", cursive;
  &:hover {
    color: darkred;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    &:hover {
      color: darkred;
      font-weight: bold;
    }
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
export const Logo = styled(Link)`
  padding: 1rem 0;
  color: darkred;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  i {
    font-family: "Indie Flower", cursive;
  }
  span {
    font-family: "Indie Flower", cursive;
    font-weight: 400;
    font-size: 2rem;
    color: white;
  }
`;
