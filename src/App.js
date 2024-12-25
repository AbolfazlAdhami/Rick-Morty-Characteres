import React from "react";
import MainPage from "./Container/MainPage";
import Wrapper from "./Container/HOC/Wrapper";
 
 
function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

export default App;
