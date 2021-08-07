import React from "react";
import "./about.scss";
const About = () => {
	return (
		<div id='about' className='about'>
			<h1>About me</h1>
			<div className='container'>
				<div className='left'>
					<img src='assets/about.jpg' alt='' />
				</div>
				<div className='right'>
					<p>
						I am a <span>Web Developer </span>  also a
						Computer Science undergraduate. I love making web pages. I know React js, Vanilla js, CSS, SCSS, HTML, BootStrap.
                    </p>
                    <a download="Karan's CV" href="assets/Resume.pdf">Download CV</a>
				</div>
			</div>
		</div>
	);
};

export default About;
