import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/Mainpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/mainpage" component={About} />
      </Routes>
    </Router>
  );
}
export default App;

