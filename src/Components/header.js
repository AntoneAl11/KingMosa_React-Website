import React from "react";
import { Link } from "react-router-dom";
import Frame1 from './img/Frame 1.png';
import Frame2 from './img/Frame 2.png';
import Frame3 from './img/Frame 3.png';
import Logo from './img/Logo.PNG';
import "./Mainpage.css";

;

function Header(){
    return(
        <header className="header">
            <img src={Logo} width="200px" alt="Logo King Mosa"/>
            <nav>
                <ul>
                    <li><Link to="/mainpage/menu"><button alt="Go To Menu" className="button"><img src={Frame1} width="200" alt="Menú"/></button></Link></li>
                    <li><Link to="/mainpage/contacto"><button alt="Go To Contacto" className="button2"><img src={Frame2} width="200" alt="Promociones"/></button></Link></li>
                    <li><a href="#"><img src={Frame3} width="200" alt="Contacto"/></a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;