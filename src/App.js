import React from "react";
import MainPage from "./Container/MainPage";
import Wrapper from "./Container/HOC/Wrapper";
import "./App.css";
import { Container } from "react-bootstrap";
// Font MUI

// Font MUI
function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

export default App;
