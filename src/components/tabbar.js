import React, {Component} from 'react'
import NavBar from './navbar.js'

export default class TabBar extends Component {

	constructor(props){
		super(props);
		this.state = {activeTab: 'home'};
	}

	render() {
		return(
			<NavBar />
			);
	}

}
