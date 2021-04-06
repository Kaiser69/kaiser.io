import React from 'react'

const Edujob = () => {
    return (
        <div id="edujob" className="edujob">
            <h2 className="job py-5">Top  Software Development Trends of 2021</h2>
        <div class="section-title-divider"></div>
        <div className="container">
            <div className="row justify-content-around">
               <div id="edujobtab" className="col-12">
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">PWA</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">AI</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">SPW</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">CC</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <h2>Progressive Web App Development (PWA)</h2>
      <p>PWAs act like native mobile applications but are actually websites. According to studies, PWAs have 36% higher conversion rates than native apps; therefore, we can see them trending going forward. The main objective of PWAs is to bring a mobile-app-like experience to users across all devices.</p>
      <p>They are more interactive and responsive. PWAs are revolutionizing the user experience through app-like functionality but without having to download it. Some of the biggest names in the industry, such as Amazon, Twitter, and Forbes, are combining native and web applications to increase conversions and decrease bounce rates. The advent of PWAs has made global brands' identities rather stronger due to their offline way of working, fast loading, and page speed.</p>
      <p>Since mobile users are increasing every day because of accessibility and reliability, this trend will continue to grow throughout 2021.</p>
      </div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <h2>AI-Powered Chatbots </h2>
      <p>Demand for AI-powered communication will be on the rise in 2021. Websites will be more focused on building AI-powered chatbots and virtual assistants for improved customer experience. </p>
      <p>Chatbots may be underrated, but they are convenient and can instantly engage users once they land on the web page. They provide users with fast responses, which can help businesses to avoid delays and customer drop off rates.  </p>
      <p>Bots are trained on data collected from users through a series of engagements, which allow them to provide better solutions. Moreover, they use natural language programming to create interactions with humans. </p>
      <p>Speech recognition techniques and cognitive intelligence are combined to make chatbots more reliable than human support staff. Global industries such as eCommerce, travel and tourism, healthcare, etc., are realizing the </p>
      </div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
    <h2>Single-Page Websites</h2>
    <p>This trend was greatly seen in the year 2020. But 2021 will be no different as this trend continues. </p>
    <p>Gone are the days of building long and extensive web structures. With people using the internet through mobile devices, single page websites are much easier to navigate. The old ways of building separate pages for different topics are becoming obsolete. </p>
    <p>Single page websites greatly minimize the page load and make it faster, which decreases bounce rate. They work well on both mobile and desktop because of their simplicity. Moreover, they are not expensive to develop and host. Single-page sites assist businesses to reach their specific target audience with limited content. Moreover, minimalist designs are easier to read and are more appealing.</p>
      </div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
      <h2>Cloud Computing</h2>
      <p>According to Gartner, the public cloud services is expected to grow to $306.9 billion by 2021. Therefore, you can expect cloud computing advancements in 2021 as well. </p>
      <p>Cloud computing prevents data loss and data overloading. Therefore it has the capability to replace regular servers. This trend will transform the approach to web development in the coming years as it not only reduces development costs but also strengthens the entire web architecture. Google Cloud Functions, Azure Functions, AWS Lambda, etc., are some of the popular examples. </p>
      <p>Given the current global situation, many businesses are depending on remote solutions; these web development trends can help build seamless tools. Frameworks like Angular.Js, Node.Js, and others will stay in the spotlight throughout the year until better technologies overtake them. Advancements in AR/VR, IoT, motion UI, accelerated mobile pages, blockchain technology will continue.</p>
      </div>
</div>
               
               </div>
                
            </div>
        </div>
    </div>  
    )
}

export default Edujob
