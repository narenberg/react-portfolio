import React from 'react'

export default function Projects(){
	return(
		<div class="body-container">
			<Project title="UCSBB" desc="An app, built using React Native, that allows the user to find the nearest bathroom to them on campus using a map and a list of all bathrooms. Built for CS48 with Prof. Tobias Hollerer" src='videos/vid1.mp4' />
			<Project title="Placeholder" desc='Yet another Placeholder' src='videos/vid2.mp4' />
			<Project title='Placeholder 2' desc='Imagine I created a project that has something to do with this video :)' src='videos/vid2.mp4' />
			<Project title='Placeholder 2' desc='Imagine I created a project that has something to do with this video :)' src='videos/vid2.mp4' />
		</div>
		);
}

function Project(props){
	return(
		<div className='project'>
			<span class='project-desc'>
				<h1>{props.title}</h1>
				<p>{props.desc}</p>
			</span>
			<video class='project-vid' width={640} height={480} controls>
				<source src={props.src} type='video/mp4' />
			</video>
		</div>
		)
}