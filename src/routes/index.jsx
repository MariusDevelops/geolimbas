import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paslaugos" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
