import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contacto from "./Components/Contacto";
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
        <Route path='/mainpage/contacto' element={<Contacto/>}/>
      </Routes>
    </Router>
  );
}
export default App;

