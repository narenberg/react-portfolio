import React from 'react'
import Tab from './tab.js'
import About from './about.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Home from './home.js'
import ScrollTopButton from './scrolltopbutton.js'
import GuestBook from './guestbook'
import firebase from '../firebase'
import MovieList from './movielist'

export default class NavBar extends React.Component{
	constructor(props){
		super(props)
		this.state = {activeTab: 'Homepage', scrolled: false}
		this.handleClick = this.handleClick.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
		this.handleScrollClick = this.handleScrollClick.bind(this)
	}

	handleClick = (e) => {
		this.setState({activeTab: e.target.getAttribute('title')})
	}

	async componentDidMount(){
		window.addEventListener('scroll', this.handleScroll)
		var messages = []
		const ref = await firebase.database().ref('data').orderByKey()
		await ref.on('child_added', (snapshot) => {
			console.log(snapshot.toJSON().public)
			if(snapshot.toJSON().public)
				messages.push(snapshot.toJSON())
		})
		this.setState( {messages} )
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll)
	}

	handleScrollClick(e){
		window.scrollTo(0, 0)
		this.setState({scrolled: false})
	}

	handleScroll(e){
		this.setState({scrolled: true})
		if(window.scrollY <= 100) this.setState({scrolled: false})
	}

	render(){
		const tabTitle = this.state.activeTab
		var content
		if(tabTitle === 'Homepage'){
			content = <Home onButtonPress={this.handleClick} />
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
		if(tabTitle === 'Guest Book'){
			content = <GuestBook messages={this.state.messages}/>
		}
		if(tabTitle === 'Movie List'){
			content = <MovieList />
		}

		var scrollTopButton = <ScrollTopButton onClick={this.handleScrollClick} />

		return(
		<div>
			<div className='navbar-container'>
				<Tab title='Homepage' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
				<Tab title='About' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
				<Tab title='Projects' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
				<Tab title='Contact' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
				<Tab title='Guest Book' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
				<Tab title='Movie List' active={this.state.activeTab} onClick={(e) => this.handleClick(e)}/>
			</div>
			{content}
			{this.state.scrolled && scrollTopButton}
		</div>
		);
	}
}