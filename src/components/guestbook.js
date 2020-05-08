import React, {Component} from 'react'
import GuestForm from './guestform'

export default class GuestBook extends Component{

	render(){
		return(
			<div className='body-contatiner'>
				<GuestForm />
			</div>
		);
	}

}