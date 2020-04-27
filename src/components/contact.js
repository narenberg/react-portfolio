import React from 'react'

export default function Contact(){
	return (
		<div class="body-container">
			<div class="container">
				<img src='email.png' alt=''/>
				<a href='mailto://nick.arenberg22@gmail.com' class='button'>Email</a>
			</div>
			<div class='container'>
				<img alt='' src='https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png' />
				<a href='https://www.linkedin.com/in/nickarenberg/' class='button'>LinkedIn</a>
			</div>
			<div class="container">
				<img alt='' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
				<a href='https://github.com/narenberg' class='button'>Github</a>
			</div>
		</div>)
}