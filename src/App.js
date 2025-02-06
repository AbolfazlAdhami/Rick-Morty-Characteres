import React from "react";
import { CharacterSingle, Episode, Episodes, Location, Locations, Main } from "./layout";
import { Routes, Route } from "react-router";
import NavBar from "./Components/UI/NavBar";
function App() {
  return (
    <body className="bg-slate-950 relative">
      <NavBar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/character/:id" element={<CharacterSingle />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Location/:id" element={<Location />} />
      </Routes>
    </body>
  );
}

export default App;
