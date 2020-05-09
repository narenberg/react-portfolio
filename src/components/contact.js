import React from 'react'
import ExpImage from './expimage.js'

export default function Contact(){
	return (
		<div className="body-container">
			<div className="container">
				<ExpImage src='email.png' />
				<a href='mailto://nick.arenberg22@gmail.com' className='button'>Email</a>
			</div>
			<div className='container'>
				<ExpImage src='https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png' />
				<a href='https://www.linkedin.com/in/nickarenberg/' className='button'>LinkedIn</a>
			</div>
			<div className="container">
				<ExpImage src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
				<a href='https://github.com/narenberg' className='button'>Github</a>
			</div>
		</div>)
}