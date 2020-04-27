import React from 'react'
import ExpImage from './expimage'

export default function Home(props){
	return(
		<div>
			<div className='text' id='summary'>
				<h2>Computer Science Student at UCSB</h2>
			</div>
			<div className="body-container">
				
				<div className='links-container'>
					<h2>Here's a little more about me</h2>
					<div className='button-container'>
						<a href='#' className='button' onClick={props.onButtonPress} title='About' >About Me</a>
						<a href='#' className='button' onClick={props.onButtonPress} title='Projects' >Projects</a>
						<a href='#' className='button' onClick={props.onButtonPress} title='Contact' >Contact Me</a>
					</div>
				</div>
				<ExpImage src="portrait.jpg" id='portrait'/>
				
			</div>
		</div>
		);
}