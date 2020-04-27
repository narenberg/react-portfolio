import React from 'react'

export default function Home(){
	return(
		<div>
			<div class='text' id='summary'>
				<h2>Computer Science Student at UCSB</h2>
			</div>
			<div class="body-container">
				
				<div class='links-container'>
					<h2>Here's a little more about me</h2>
					<div class='button-container'>
						<a href='contactme.html' class='button'>Contact Me</a>
						<a href='projects.html' class='button'>Projects</a>
						<a href='about.html' class='button'>About</a>
					</div>
				</div>
				<img src="portrait.jpg" id='portrait'/>
				
			</div>
		</div>
		);
}