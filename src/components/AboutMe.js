import React from "react";
import author from "../me.png";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">

<h1 className="about-heading mb-5">about me</h1>
<div class="section-title-divider"></div>
                    <p class="section-description">Front-end developer, UX/UI Designer</p>
                   
      <div className="row">
        <div className="col-lg-4 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-8 col-xm-12">
          <h3 className="about-title">Great services and ideas</h3>
          <div class="section-title-divider"></div>
          <p className="about-text">
          I have experience designing, developing, and managing complex e-commerce sites and internal
           frameworks. Specializes in responsive design, and have a proven ability to handle various 
           projects at the same time and complete them by given deadline. Designed run time algorithms 
           and developed AI systems. Participated in navigation, vehicle control and decision making.  </p>
          <p className="about-text">
          Created AI frameworks and implemented AI components Mobile and web app. Suggested and executed 
          navigation features for AI. Prepared and reviewed plans associated with next generation AI solutions. 
          Lead the development of businesses cases for further project sales as determined by the practice. 
          Drive the integrated value proposition and work with the client to gain alignment and buy-in, 
          Apply Accenture standard methods for performing strategy assessments and implementations, 
          Work closely with leadership to set strategy and define success criteria for any project.
          </p>
           <p className="about-text">
           Professional roles: Proficient in application designing, coding and troubleshooting: Unity C, 
           Swift, Java, HTML5, CSS3, JavaScript(React JS, jQuery) Bootstrap, and including:  InVision, Sketch, 
           Adobe Creative Cloud and user-centred design  to create unique Mobile Apps and Progressive Web Apps. 
           Translation of wireframes and rapid prototyping tools to accurate, working code and Frameworks. 
           Performance Testing, Load Testing & Debugging, Object-Oriented Programming. Agile Methodology & SCRUM, 
           Content Management Systems (CMS). Experience of modern software engineering techniques e.g. Continuous 
           Integration (CI), Version Control Systems (Subversion / Git, Code validation and quality analysis).
           </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
