import React from "react";
import '../styles/NavBar.css'
const NavBar = () => {
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
            <li className="item"><a href="#certificate-container">Certificates</a></li>
            <li className="item"><a href="#home">Resume</a></li>
          </ul>
          </div>
      </div>
      <div className="divider">

      </div>
      </>
  )
}
export default NavBar;