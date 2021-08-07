import React from "react";
import "./contact.scss";
const Contact = () => {
	return (
		<div id='contact' className='contact'>
			<h1>Contact</h1>
			<div className='container'>
				<div className='left'>
					<p>
                        Send your quries via Email or whatsapp me . <br /> Click on the <span> Email me </span>
						button or <span> Whatsapp Icon</span>
					</p>
				</div>
				<div className='right'>
			
                <span> <a href="mailto:joshikaran392@gmail.com"> Email me</a> </span>

				</div>
			</div>
		</div>
	);
};

export default Contact;
