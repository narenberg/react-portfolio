import React from 'react'

export default function Projects(){
	return(<div class="body-container">
			<div class="project">
				<span class='project-desc'>
					<h1>Project Title</h1>
					<p>Imagine that I have created a project that has something to do with this video :)</p>
				</span>
					<video class='project-vid' width={640} height={480} controls>
					<source src='videos/vid1.mp4' type='video/mp4' />
				</video>
			</div>
			<div class="project">
				<span class='project-desc'>
					<h1>Project Title</h1>
					<p>Imagine that I have created a project that has something to do with this video :)</p>
				</span>
					<video class='project-vid' width={640} height={480} controls>
					<source src='videos/vid2.mp4' type='video/mp4' />
				</video>
			</div>
			<div class="project">
				<span class='project-desc'>
					<h1>Project Title</h1>
					<p>Imagine that I have created a project that has something to do with this video :)</p>
				</span>
					<video class='project-vid' width={640} height={480} controls>
					<source src='videos/vid1.mp4' type='video/mp4' />
				</video>
			</div>
			<div class="project">
				<span class='project-desc'>
					<h1>Project Title</h1>
					<p>Imagine that I have created a project that has something to do with this video :)</p>
				</span>
					<video class='project-vid' width={640} height={480} controls>
					<source src='videos/vid2.mp4' type='video/mp4' />
				</video>
			</div>
		</div>);
}