import React, {Component} from 'react'

export default class ScrollTopButton extends Component {

	render() {
		return(
			<a href='#' className='button scroll-top-button' onClick={this.props.onClick} >Back To Top</a>
			);
	}

}
