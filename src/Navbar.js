import React, { useEffect, useState } from 'react'
import "./navbar.css";
import logo from "../assets/img/logo.png";

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
            <img className="nav__logo" src={Image} alt="Netfix official logo"/>

        <button className="nav__avatar">Sign in</button>

            
        </div>
    )
}
