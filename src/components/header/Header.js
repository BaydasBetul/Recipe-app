import React from "react";
import { HeaderContainer, MainHeader } from "./HeaderStyles";
import Form from "./Form";
import { FaPhoenixSquadron } from "react-icons/fa";
const Header = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  return (
    <HeaderContainer>
      
      <MainHeader>Bety's<FaPhoenixSquadron style={{ color: "black", fontSize: "30px" }} /> Recipe App</MainHeader>
      <Form
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </HeaderContainer>
  );
};

export default Header;
