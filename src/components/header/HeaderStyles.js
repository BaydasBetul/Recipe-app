import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainHeader = styled.h2`
  border: 3px solid black;
  border-radius:5px;
  color:#9C0500;
  //color: white;
  margin-top: 1rem;
  font-size: 2.7rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid black;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`
font-family: "Indie Flower", cursive;
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;

export const Button = styled.button`
  font-family: "Indie Flower", cursive;
  font-weight: bold;
  background-color: darkred;
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background-color: #135908;
    transition: all 0.3s ease-in;
    border: 1px solid black;
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
  font-family: "Indie Flower", cursive;
`;
