import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import {
  FarmerAuth,
  FarmerConsole,
  Fert,
  Home,
  Other,
  Veg,
} from "./pages/index";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/auth" element={<FarmerAuth />} />
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/fert" element={<Fert />} />
        <Route path="/other" element={<Other />} />
        <Route path="/console" element={<FarmerConsole />} />
      </Routes>
    </div>
  );
};

export default App;
