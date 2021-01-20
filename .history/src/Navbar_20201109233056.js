import React, { useEffect, useState } from 'react'
import "./navbar.css"


    


export default function Navbar() {

    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
            handleShow(true);
        }
        else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])
    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.tubefilter.com%2Fwp-content%2Fuploads%2F2016%2F07%2FNetflix_logo.jpg&f=1&nofb=1.jpg" alt="Netfix official logo"/>

        <button className="logo__avatar">Sign in</button>

            
        </div>
    )
}
