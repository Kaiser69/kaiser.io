import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container">

        <a className="navbar-brand" href="logo"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
             </li>
            <li className="nav-item">
            <Link smooth={true} to="about" offset={-110} className="nav-link" >about me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="AionAR" offset={-110} className="nav-link" href="#">AionAR</Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="pitch" offset={-110} className="nav-link" href="#">Pitch</Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="Portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="Contacts" offset={-110} className="nav-link" href="#">Contacts</Link>
            </li>
       <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle" href="button" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="Gallery">Gallery</a></li>
            <li><a class="dropdown-item" href="Another Gallery">Another Gallery</a></li>
            <li><a class="dropdown-item" href="Something Else">Something Else </a></li>
          </ul>
        </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar