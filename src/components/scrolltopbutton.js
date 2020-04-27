import React, {Component} from 'react'
import NavBar from './navbar.js'

export default class ScrollTopButton extends Component {

	render() {
		return(
			<a href='#' class='button scroll-top-button' onClick={this.props.onClick} >Back To Top</a>
			);
	}

}
