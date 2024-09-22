import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/Mainpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/mainpage" element={<About/>} />
      </Routes>
    </Router>
  );
}
export default App;

