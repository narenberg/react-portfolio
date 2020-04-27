import React, {Component} from 'react'

export default class ExpImage extends Component{

	//Expandable Image

	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {expanded: false}
	}

	// handleClick(e){
	// 	this.setState(state => ({
	// 		expanded: !state.expanded
	// 	}));
	// }

	handleClick(e){
		var cont = document.createElement('div');
    	var bigImage = document.createElement('img');
    	cont.classList.add('whole-page');
    	cont.onclick = function(){
    		cont.parentNode.removeChild(cont);
    	}
    	bigImage.classList.add('large-in-charge');
    	bigImage.src = e.target.getAttribute('src');
    	cont.appendChild(bigImage);
    	document.querySelector('body').appendChild(cont)
	}

	render(){
		return(
			<img src={this.props.src} alt='' onClick={this.handleClick} />
			)
	}
}