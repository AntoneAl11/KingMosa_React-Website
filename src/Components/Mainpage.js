import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./Mainpage.css";

function Mainpage (){
    return(
        <div>
            <Header/>
            <main className="mainpagee">
                <h1>La forma exquisita de comer pizza</h1>
                <br></br>
                <br></br>
                <br></br>
            </main>
            <Footer/>
        </div>
    )
}

export default Mainpage;