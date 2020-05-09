import React from 'react'
import firebase from '../firebase.js'

export default class GuestForm extends React.Component {

	constructor(props){
		super(props)
		const initialFormData = {
			name: '',
			desc: '',
			msg: '',
			public: false,
			email: ''
		}
		this.state = initialFormData
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		const name = e.target.name
		if(name === 'public') this.setState({public: e.target.checked})
		else this.setState({[name]: e.target.value})
	}

	handleSubmit(e) {
		console.log(this.state)
		var data = this.state;
		var now = new Date();
		data.date = now.getMonth() + '/' + now.getDate() + '/' +  now.getFullYear();
		firebase.database().ref('data').push(data)
		alert('Message submitted successfully!')
		e.target.reset()
		window.reload()
		e.preventDefault()
	}

	render(){
		return(
			<div className='guest-form-container'>
				<h1>Leave me a message!</h1>
				<form className='guest-form' onSubmit={this.handleSubmit} onChange={this.handleChange}>
					<label htmlFor='name'>Your name:</label>
					<input type='text' id='name' name='name' minLength={5} maxLength={20} required />
					<label htmlFor='desc'><span>A short self-description (No more than 100 characters):</span></label>
					<input type='text' id='desc' name='desc' maxLength={100}/>
					<label htmlFor='msg'><span>Enter your message here (No more than 500 characters)</span></label>
					<input type='text' id='msg' name='msg' minLength={15} maxLength={500} required/>
					<label htmlFor='public'> Should this post be visible to others? </label>
					<input type='checkbox' id='public' name='public' />
					<label htmlFor='email'>Enter your email so I can get back to you:</label>
					<input type='text' pattern='*@*.*' name='email' id='email' />
					<input type='submit' value='Submit' />
				</form>
			</div>
			)
	}
}