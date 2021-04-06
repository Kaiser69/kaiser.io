import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faGraduationCap,faSync } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="experience" className="services">
      <h1 className="py-5">IT EDUCATION & WORKING EXPERIENCE</h1>
      <div class="section-title-divider"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" /></div>
              <h3>Malmö Yrkeshögskola</h3>
              <p>Advanced programmer iOS and Android-mobile applications, project manager, applications Tester/QA. </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" /></div>

              <h3>Malmö Yrkeshögskola</h3>
              <p>Content Producer - Text, image, audio, video and infographic Social and digital media, full stack - Web developers.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" /></div>

              <h3>London College of Contemporary Arts </h3>
              <p> Adobe Creative Suite - Digital Design for print projects , illustrations, typography, web and mobile app designs.</p>
            </div>
          </div>
           <div className="col-md-4">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>The AI business </h3>
              <p>Created AI frameworks and implemented AI components Mobile and web app. </p>.
            </div>
          </div>
         
          {/* - */}
          <div className="col-md-4">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>

              <h3>UI Developer</h3>
              <p> Front-end UI developer with 8 years’ experience on translating UI/UX designs to actual code produce visual elements of the application.</p>

            </div>
          </div>
          {/* - */}
          <div className="col-md-4">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faSync} size="2x" /></div>

              <h3>Skills</h3>
              <p> HTML5, CSS/Bootstrap, JavaScript/Typescript, Reactive Programming, C#, jQuery, JSON, Vue.js, MVC, and Web API </p>
               </div>
            </div>
          
        </div>
      </div>
    </div>

    

  )
}

export default Services;
