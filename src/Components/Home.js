// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Entrar from "./img/Entrar.png";

function Home() {
  return (
    <div className="home">
      <Link to="/about">
        <img src={Entrar} alt="Go to About" />
      </Link>
    </div>
  );
}

export default Home;
