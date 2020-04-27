import React from 'react'
import Tab from './tab.js'
import About from './about.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Home from './home.js'

export default class NavBar extends React.Component{
	constructor(props){
		super(props)
		this.state = {activeTab: 'Homepage'}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick = (e) => {
		this.setState({activeTab: e.target.getAttribute('title')})
	}

	render(){
		const tabTitle = this.state.activeTab
		var content
		if(tabTitle === 'Homepage'){
			content = <Home />
		}
		if(tabTitle === 'About'){
			content = <About />
		}
		if(tabTitle === 'Projects'){
			content = <Projects />
		}
		if(tabTitle === 'Contact'){
			content = <Contact />
		}
		return(
		<div>
			<div className='navbar-container'>
				<Tab title='Homepage' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
				<Tab title='About' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
				<Tab title='Projects' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
				<Tab title='Contact' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
			</div>
			{content}
		</div>
		);
	}
}