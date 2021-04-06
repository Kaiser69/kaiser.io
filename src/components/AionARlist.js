import React from 'react'
import Title from "./Title";


const AionARlist = () =>{
    return (
      <div id="AionAR">
         <Title main> Ai & Augmented Reality </Title>
         <div class="section-title-divider"></div>

             <div id="card">
                  <model-viewer src="https://cdn.glitch.com/d4d18a87-989c-4b88-a25b-5131c19702f6%2Fbike.glb?v=1613469750417"
                  ios-src="https://cdn.glitch.com/d4d18a87-989c-4b88-a25b-5131c19702f6%2FFree_Concept_Sport_Bike.usdz?v=1613470784816"
                   alt="A 3D model of an astronaut"
                   loading='lazy'
                  camera-controls
                  auto-rotate ar>
                  </model-viewer>
             </div>
       </div>
    )
}
export default AionARlist;

