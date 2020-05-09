import React, {Component} from 'react'
import firebase from '../firebase.js'

export default class MessageBoard extends Component {

	constructor(props){
		super(props)
		this.state = {messages: [], shouldUpdate: false}
	}

	async componentWillMount(){
		var messages = this.state.messages
		const ref = await firebase.database().ref('data').orderByKey()
		await ref.on('child_added', (snapshot) => {
			if(snapshot.toJSON().public)
				messages.push(snapshot.toJSON())
		})
		this.setState( {messages} )
	}

	render(){
		var messages = this.state.messages
		return(
			<div className='msg-container'>
				{ messages.map( (msg, index) => 
					(<div className='msg' key={index}>
						<h3>{msg.name}</h3>
						<p className='subtitle'>{msg.date}</p>
						<p>{msg.desc}</p>
						<p>{msg.msg}</p>
					</div>) )
				}
			</div>
			)
	}
}

// function Message(props){
// 	console.log(props)
// 	return(
		
// 		)
// }