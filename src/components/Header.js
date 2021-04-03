import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import background from "../download.webp";


const Header = () => {
  return (
    <div id="home" className="header-wraper" 
    style={{
        backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat',height:'90vh',width:'100%',backgroundSize:"cover",
        position:"absolute"}}>
      <div className="main-info">
        <canvas></canvas>
        <h1>Kaiser A ÖzHun Front-end UI Developer</h1>
        <Typed
          className="typed-text"
          strings={["Front-end UI Development", "Smart Design", "Great services and ideas"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>
      </div>
    </div>
  )
}

export default Header;