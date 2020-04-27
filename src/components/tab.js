import React, {Component} from 'react'

export default class Tab extends Component{
	render() {
		return(
			<div title={this.props.title} onClick={this.props.onClick} className={[this.props.active === this.props.title && 'active', 'navbar-content'].join(' ')}>
				<p title={this.props.title}>{this.props.title}</p>
			</div>
			)
	}
}