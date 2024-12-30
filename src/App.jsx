import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CGPAPredictor from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<CGPAPredictor />} />
      </Routes>
    </Router>
  );
}

export default App;
