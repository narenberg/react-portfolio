import React, {Component} from 'react'
import GuestForm from './guestform'
import MessageBoard from './messageboard'

export default class GuestBook extends Component{
	constructor(props){
		super(props)
		this.state = {messages: props.messages}
	}
	render(){
		return(
			<div className='body-container'>
				<GuestForm />
				<MessageBoard messages={this.state.messages}/>
			</div>
		);
	}

}