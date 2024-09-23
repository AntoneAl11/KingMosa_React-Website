// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Entrar from "./img/Entrar.png";

function Home() {
  return (
    <div className="home">
      <Link to="/mainpage">
        <button alt="Go to Mainpage" className='btnin'/>
      </Link>
    </div>
  );
}

export default Home;
