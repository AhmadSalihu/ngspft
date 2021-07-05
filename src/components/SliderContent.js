import React from 'react';
import "./slider.css";


const SliderContent = ({ activeIndex, imageSlider }) => {
	return (
		<section>
			{imageSlider.map((slide, index) => (
				<div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
					<img className="slide-image" src={slide.urls} alt="" />
					<h2 className="slide-title">{slide.title}</h2>
					<h3 className="slide-text">{slide.description}</h3>
			</div>

			))}
		</section>
	)
}

export default SliderContent
