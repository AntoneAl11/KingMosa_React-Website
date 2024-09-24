import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Mainpage from "./Components/Mainpage";
import Menu from "./Components/Menu";
import Contacto from "./Components/Contacto";

function App() {
  useEffect(() => {
    fetch("/api").then(Response => Response.json()).then(data => console.log(data));
  },[]);
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

