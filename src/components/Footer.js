import React from 'react'
import styled from "styled-components";
import KaiserCV from "../kaisercv.jpg"
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
  } from "react-share";

  const Styles = styled.div`
  
  .footer {
    height: 3vh !important; 
  }
  
  .footer mx-3 {

    margin: .3rem;

  }
  .footer a {
    text-decoration: none;
    color: #666666;
  }
  
  .footer a:hover {
    text-decoration: none;
    color: #f9ab00;
    cursor:pointer;
  }
  
  .footer p {
    margin-bottom: .5rem;
  }
  .container { 
    padding: 5rem 0rem; 
  }
  .fab {
    font-size: 36px;
    color: transparent;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background-clip: text;
    -webkit-background-clip: text;
    }
  }
`;



function Footer (){
    return (

 <Styles>
   <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <h3 class="text-success">Kaiser's Resume online </h3>
            </div>
            <br />
            <div className="d-flex">
              <a href="tel:555-555-555">+46703637554</a>
            </div>
            <br />
            <div className="d-flex">
              <p>write tome: pen1921@me.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col subscribe-btn-container">
                <a href="https://kaiser69.github.io/resume.io/" role="button" className="d-flex">Resume Older</a>
                <br />
                <a href={KaiserCV} target="_blank" rel="noopener noreferrer" download>
                  
                 <i className="fas fa-download"/>
                  Download CV
                </a> 
                <br />
                <a href="https://www.sony.se" className="d-flex">SONY</a>
                <br />
              </div>
             
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center py-3">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/izdinish"}
                quote={"Pesillik Zhurnal"}
                hashtag="#Edebiyat-Sannat"
              >
                <FacebookIcon className="mx-3" size={36}  style={{'borderRadius':'50%'}}  />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.twitter.com/izdinish"}
                quote={"Pesillik Zhurnal"}
                hashtag="#Edebiyat-Sannat"
              >
                <TwitterIcon className="mx-3" size={36}  style={{'borderRadius':'50%'}} />
              </TwitterShareButton>
              
              <a
                 href={"https://www.instagram.com/izdinish_/"}
                quote={"Pesillik Zhurnal"}
                hashtag="#Edebiyat-Sannat"
              >
                <i class="fab fa-instagram fa-5x"  ></i>
              </a>
            </div>
            <p className="pt-3 text-center ">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;KaiserPWA| All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </Styles>
    )
}

export default Footer;
