import React from 'react';
// import Slider from '../components/aboutslider/slider';
// import data from './about.data';
// import AboutCard from './AboutCard';
// import MadeCarousel from './madeCarousel/carousel';
import AbCarousel from '../components/Abcarousel' 

import './about.css'


const About = () => {
	return (
		<div className="about-page bottom-top">
			{/* <Slider /> */}
    <article data-name="article-full-bleed-background">
  <div className="cf" style={{ background: "url(https://www.zerox24.com/wp-content/uploads/2020/07/Technology-related-business-ideas.png) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="flex pa3 pa4-ns black-70 f3 times">
      <header className="b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt8 mb3 avenir">About Us</h3>
        {/* <h4 className="f3 fw4 i lh-title mt0">Ngsoft Is a life Solution software Company</h4> */}
      </header>
			</div>
      </div>
      </article>
      <br />
    <div className="pa4">
    <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
    <p className="f6 f4-m f3-l lh-copy measure bgc mt0">
     NGSoft is set for design and development products and services targeted at the digitization of processes, in the commercial, public and social subsectors. NGSoft has continuously remained a benchmark for excellence in vehicular and Transportations registartion, plate no. renewals, Governance and finance, home and property as well various social services in Nigeria. We have since set scene for expansion to English Speaking West and East African countries in the immediate near future.
    </p>
    <cite className="f6 ttu tracked fs-normal">―NGSoft</cite>
  </blockquote>
      </div>
       <br />
    <AbCarousel />
</div>
  )
}

export default About;