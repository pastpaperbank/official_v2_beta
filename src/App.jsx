import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import ComputerSciencePage from "./pages/subjects/ComputerSciencePage";
import ChemsitryPage from "./pages/subjects/ChemistryPage";
import PhysicsPage from "./pages/subjects/PhysicsPage";
import BiologyPage from "./pages/subjects/BiologyPage";
import FurtherPureMathPage from "./pages/subjects/FurtherPureMathPage";
import MathBPage from "./pages/subjects/MathBPage";
import BusinessPage from "./pages/subjects/BusinessPage";

function App() {
  return (
    <Router basename="/official_v2_beta">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/computer-science" element={<ComputerSciencePage />} />
        <Route path="/chemistry" element={<ChemsitryPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/biology" element={<BiologyPage />} />
        <Route path="/further-pure-math" element={<FurtherPureMathPage />} />
        <Route path="/math-b" element={<MathBPage />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
