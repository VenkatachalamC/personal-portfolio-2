import React, { useState,useContext } from "react";
import '../styles/NavBar.css';
import { theme } from "../context/theme";
const NavBar = () => {
  const themeCont=useContext(theme);
  //const [theme,settheme]=useState("dark");
  function switchtheme(e){
    //settheme(prev=>prev==="dark"?"light":"dark")
    themeCont.setcurrtheme(prev=>prev==="dark"?"light":"dark")
    document.querySelector("body").classList.toggle('dark-theme');
    const h3=document.querySelectorAll("h3");
    const p=document.querySelectorAll("p");
    const h5=document.querySelectorAll("h5");
    const h1=document.querySelectorAll("h1");
    const nav=document.querySelector(".nav");
    nav.classList.toggle("dark-theme");
    h3.forEach((item)=>item.classList.toggle("darktheme-fonts"));
    p.forEach((item)=>item.classList.toggle("darktheme-fonts"));
    h5.forEach((item)=>item.classList.toggle("darktheme-fonts"));
    h1.forEach((item)=>item.classList.toggle("darktheme-fonts"));
  }
    return (
      <>
      <div className="nav">
        <div className="nav-right">
        <h1>Venkatachalam C</h1>
        </div>
        <div className="nav-left">
          <ul>
          <li className="item"><a href="#home">Home</a></li>
            <li className="item"><a href="#about">About</a></li>
            <li className="item"><a href="#projects">Projects</a></li>
            <li className="item"><a href="#certificates">Certificates</a></li>
            <li className="item"><a href="https://drive.google.com/file/d/1uuXC7nwSsEL1KbbQxrkUC82iOgrpM59A/view?usp=sharing" target="_blank">Resume</a></li>
            <li className="item"><img onClick={switchtheme} src={"./themeicons/"+(themeCont.current==="light"?"dark":"light")+".png"} className="theme-icon"/></li>
          </ul>
          </div>
      </div>
      <div className="divider">

      </div>
      </>
  )
}
export default NavBar;