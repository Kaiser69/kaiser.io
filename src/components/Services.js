import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF} from "@fortawesome/free-brands-svg-icons";
import { faPencilRuler, faFileCode, faCogs } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div class="section-title-divider"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faPencilRuler} size="2x" /></div>
              <h3>Smart Design</h3>
              <p>I approach each project individually and always focus on the result.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Web App</h3>
              <p>Your website will be build with an new proven technologies.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>

              <h3>Content Manager</h3>
              <p>Create, edit: Text, image, audio, video and infographic Social and digital media Streaming.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCogs} size="2x" /></div>

               <h3>The AI business </h3>
              <p>Created AI frameworks and implemented AI components Mobile and web app. </p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
