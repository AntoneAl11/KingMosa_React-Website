import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./Mainpage.css";
import menu1 from "./img/Menu.jpeg"
import menu2 from "./img/menu2.jpg"

function Menu (){
    return(
        <div>
            <Header/>
            <main className="menuu">
                <img src={menu1} alt="menupizzas"/>
                <img src={menu2} alt="menupizzas2"/>
                <br></br>
                <br></br>
                <br></br>
            </main>
            <Footer/>
        </div>
    )
}

export default Menu;