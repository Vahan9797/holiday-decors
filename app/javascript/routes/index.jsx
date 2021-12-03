import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../components/Home";

export default (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  </Router>
);