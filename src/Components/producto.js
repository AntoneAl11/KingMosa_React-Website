import React from "react";
import Menu from "./img/Menu.jpeg";
import Menu2 from "./img/menu2.jpg";

function Producto(){
    return(
        <producto>
            <nav>
                <img src={Menu} width="800px" alt="Menu"></img>
                <img src={Menu2} width="800px" alt="Menu"></img>
                <br></br>
                <br></br>
                <br></br>
            </nav>
        </producto>
    );
}

export default Producto;