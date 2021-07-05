import React from 'react';
import '../components/home.css'
import Slider from '../components/aboutslider/slider'


const About = () => {
	return (
		<div>
			<Slider />
		  <article data-name="article-full-bleed-background">
  <div className="cf" style={{ background: "url(https://www.zerox24.com/wp-content/uploads/2020/07/Technology-related-business-ideas.png) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">About Us</h3>
        <h4 className="f3 fw4 i lh-title mt0">Ngsoft Is a life Solution software</h4>
      </header>
      <section className="pt5 pb4">
        	<p className="times lh-copy measure f4 mt0">
						Prasat Suor Prat (Khmer: ប្រាសាទសួព្រ័ត) is a series of twelve towers spanne
						north to south lining the eastern side of royal square in Angkor Thom,
						near the town of Siem Reap, Cambodia. The towers are made from rugged
						laterite and sandstone. The towers are located right in front of
						Terrace of the Elephants and Terrace of the Leper King, flanking the
						start of the road leading east to the Victory Gate, on either side of
						which they are symmetrically arranged. Their function remains unknown.
        	</p>
      	</section>
    	</div>
  	</div>
	</article>
		
	</div>
	)
}

export default About