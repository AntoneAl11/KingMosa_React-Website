import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Mainpage from "./Components/Mainpage";
import Menu from "./Components/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/mainpage" element={<Mainpage/>} />
        <Route path='/mainpage/menu' element={<Menu/>}/>
      </Routes>
    </Router>
  );
}
export default App;

