import React from "react";

import CharacterList from "../Components/CharacterList";
import NavBar from "../Components/Navbar/NavBar";
import Wrapper from "./HOC/Wrapper";

const MainPage = () => {
  return (
    <Wrapper>
      <div className="app">
        <NavBar />
        <CharacterList />
      </div>
    </Wrapper>
  );
};

export default MainPage;
