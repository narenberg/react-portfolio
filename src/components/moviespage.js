import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {SRLWrapper} from 'simple-react-lightbox'
import firebase from '../firebase.js'
import ExpImage from './expimage'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import Select from 'react-select'

export default class MoviesPage extends Component {

	constructor(props) {
		super(props)
		this.state = {list: 'All',
			ready: false,
			movies: [],
			allMovies: [],
			lists: [],
			activeList: 'All',
			numMovies: 8,
			maxLoaded: false,
			searchValue: ''
		}

		this.addMovie = this.addMovie.bind(this)
		this.addList = this.addList.bind(this)

		this.onFormChange = this.onFormChange.bind(this)
		this.onListChange = this.onListChange.bind(this)

		this.loadMoreMovies = this.loadMoreMovies.bind(this)
		this.removeMovieHandler = this.removeMovieHandler.bind(this)
		this.addToListHandler = this.addToListHandler.bind(this)
	}

	onFormChange(event){
		const name = event.target.name
		this.setState({[name]: event.target.value})
	}

	async onListChange(event){
		this.setState({numMovies: 8})
		console.log(event.target)
		await this.setState({activeList: event.target.value, ready: false, movies: []})
		const ref = await firebase.database().ref('lists/' + this.state.activeList)
		var updateMovies = await ref.once('value', (data) => {
			for(var child in data.val()){
				var obj = data.val()[child]
				if(obj.imdbID){
					this.setState(state => {
						if(state.movies.includes(obj)) return
						var movies = state.movies.concat(obj)
						return {movies: movies}
					})
				}
			}
		})
		if(this.state.movies.length <= 8){
			this.setState({maxLoaded: true})
		} else{
			this.setState({maxLoaded: false})
		}

	}

	async addMovie(event){
		event.preventDefault()
		console.log(event.target)
		if(this.state.allMovies.includes(this.state.movieId)){
			alert('Movie Already Exists')
			document.getElementById('addMovieForm').reset()
			return
		}
		this.setState({ready: false})
		const apikey = '8ca8817a'
		var url = 'https://omdbapi.com/?apikey=' + apikey + '&i=' + this.state.movieId
		var raw = await fetch(url)
		var json = await raw.json()
		
		const ref = await firebase.database().ref('lists/All')
		if(!json.Error){
			ref.push(json)
			alert('Added new movie: ' + json.Title)
			this.setState(state => {
				var movies = state.allMovies.concat(json.imdbID)
				return {allMovies: movies}
			})
			if(this.state.activeList == 'All'){
				this.setState(state => {
					var movies = state.movies.concat(json)
					return {movies: movies}
				})
			}
			document.getElementById('addMovieForm').reset()
		} else{
			alert(json.Error)
		}
		if(this.state.allMovies.length > this.state.numMovies){
			this.setState({maxLoaded: false})
		}
		
	}

	async addList(event){
		event.preventDefault()
		const newListName = this.state.newListName
		const newList = {name: newListName}
		this.setState({ready: false})
		const ref = await firebase.database().ref('lists/' + newListName)
		if(!this.state.lists.includes(newListName)){
			try{
				ref.child('name').set(newListName)
			} catch(e){
				alert(e)
			}
		} else{
			alert('List Already Exists')
		}
		this.setState({ready: true})
		document.getElementById('addListForm').reset()
		
	}

	async componentDidMount() {
		const ref = await firebase.database().ref('lists')
		var onNewList = await ref.orderByChild('name').on('child_added', (data) => {
			if(!this.state.lists.includes(data.val().name)){
				this.setState(state => {
					if(state.lists.includes(data.val().name)) return
					var lists = state.lists.concat(data.val().name)
					lists.sort()
					return {lists: lists}
				})
			}
		})
		const moviesRef = await ref.child('All')
		var onMovieLoad = await moviesRef.once('value', (data) => {
			for(var child in data.val()){
				var obj = data.val()[child]
				if(obj.imdbID){
					this.setState(state => {
						var movies = state.movies
						var allMovies = state.allMovies
						if(!state.allMovies.includes(obj.imdbID)){
							var allMovies = state.allMovies.concat(obj.imdbID)
						}
						if(!state.movies.includes(obj)){
							var movies = state.movies.concat(obj)
						}
						return {movies: movies, allMovies: allMovies}
					})
				}
			}
		})
		this.setState({loaded: true})
	}

	loadMoreMovies(){
		this.setState(state => {
			var numMovies = state.numMovies
			var maxLoaded = state.maxLoaded
			var allMoviesLen = state.allMovies.length
			if(allMoviesLen - numMovies < 8){
				maxLoaded = true
			}
			numMovies += 8
			return {numMovies, maxLoaded}
		})
	}

	async removeMovieHandler(movie){
		var key
		for(var list in this.state.lists){
			var l = this.state.lists[list]
			const ref = await firebase.database().ref('lists/' + l)
			await ref.orderByChild('Title').equalTo(movie.Title).once('value', data => {
				if(data.val()){
					key = Object.keys(data.toJSON())[0]
				}
			})
			if(key){
				const delRef = await ref.child(key + '')
				await delRef.remove()
			}
		}
		this.setState(state => {
			var movies = state.movies
			var allMovies = state.allMovies
			var index = state.movies.indexOf(movie)
			if(index != -1){
				movies = state.movies.splice(index, 1)
			}
			var allMovies = state.allMovies
			var index = state.allMovies.indexOf(movie.imdbID)
			if(index != -1){
				allMovies = state.allMovies.splice(index, 1)
			}
			return {movies, allMovies}
		})
	}

	async addToListHandler(movie, s){
		console.log(s)
		const ref = await firebase.database().ref('lists/' + s.value)
		var exists = true
		try{
			await ref.once('value', data => {
				console.log(data.val(), movie)
				for(var child in data.val()){
					console.log(data.val()[child], movie)
					if(data.val()[child].imdbID === movie.imdbID)
						return
				}
				exists = false
			})
			if(!exists){ 
				ref.push(movie)
				if(this.state.activeList == s){
					this.setState(state => {
						var movies = state.movies.concat(movie)
						return {movies: movies}
					})
				}
				alert('Added ' + movie.Title + ' to ' + s.value)
			} else {
				alert( movie.Title + ' already exists in ' + s.value)
			}
		} catch(e) {
			console.error(e)
		}
	}

	render() {
		const {list, ready, lists} = this.state
		const regex = new RegExp(this.state.searchValue)
		var movies = this.state.movies.filter(m => {return regex.test(m.Title.toLowerCase()) || this.state.searchValue === ''}).slice(0, this.state.numMovies).map(m => {
			return <PosterImage movie={m} key={m.imdbID} removeMovieHandler={this.removeMovieHandler} addToListHandler={this.addToListHandler} lists={this.state.lists}/>
		})
		return(
			<div className='body-container vertical'>
				<div className='horizontal'>
					<div className='vertical background-1 new-form'>
						<h1>Add a New Movie</h1>
						<form onSubmit={this.addMovie} onChange={this.onFormChange} id='addMovieForm'>
							<input type='text' name='movieId' id='movieId'/>
							<input type='submit' value='Add Movie'/>
						</form>
					</div>
					<div className='vertical background-1 new-form'>
						<h1>Create A New List</h1>
						<form onSubmit={this.addList} onChange={this.onFormChange} id='addListForm'>
							<input type='text' name='newListName' minLength={2}/>
							<input type='submit' value='Create List'/>
						</form>
					</div>
					<select value={this.state.activeList} onChange={this.onListChange} className='button'>
						{this.state.lists.map(list => <option value={list} key={list}>{list}</option>)}
					</select>
					<label htmlFor='searchValue'>Search: </label>
					<input type='text' value={this.state.searchValue} name='searchValue' id='searchValue' className='search-form' onChange={this.onFormChange}/>
				</div>
				<div className='horizontal wrappable centered'>
					{movies}
				</div>
				{!(this.state.maxLoaded) && <button className='button' onClick={this.loadMoreMovies}>Load More Movies</button>}
			</div>
			)
	}
}

export class PosterImage extends Component {
	constructor(props){
		super(props)
		this.state = {isOpen: false}

		this.openLightBox = this.openLightBox.bind(this)
		this.closeLightBox = this.closeLightBox.bind(this)

		this.deleteHandler = this.deleteHandler.bind(this)
		this.addToListHandler = this.addToListHandler.bind(this)
	}

	openLightBox(e){
		this.setState(state => {
			return {isOpen: true}
		})
	}

	closeLightBox(e){
		this.setState(state => {
			return {isOpen: false}
		})
	}

	componentWillUnmount(){

	}

	async deleteHandler(e){
		e.preventDefault()
		
		this.props.removeMovieHandler(this.props.movie)
		this.closeLightBox()
	}

	addToListHandler(movie, s){		
		this.props.addToListHandler(this.props.movie, s)
	}
	render(){
		const isOpen = this.state.isOpen
		const movie = this.props.movie
		return(
			<div onClick={this.openLightBox}>
				<img className='movie-poster' src={movie.Poster} />
				{isOpen && <LightBox movie={movie} closeHandler={this.closeLightBox} deleteHandler={this.deleteHandler} addToListHandler={this.addToListHandler} lists={this.props.lists}/>}
			</div>
			)
	}
}

class LightBox extends Component{

	constructor(props){
		super(props)

		this.addToListHandler = this.addToListHandler.bind(this)
	}

	componentDidMount(){
		document.getElementById('close-button').onclick = this.props.closeHandler
		document.getElementById('delete-button').onclick = this.props.deleteHandler
	}

	addToListHandler(s){
		this.props.addToListHandler(this.props.movie, s)
	}

	render(){
		const movie = this.props.movie
		const lists = this.props.lists
		
		var options = [...lists]
		options = [...options.filter(word => word != 'All')]
		options = options.map(o => {
			return {value: o, label: o}
		})
		const box = (
			<div className='whole-page' id='modal' onClick={this.props.closeHandler}>
				<div className='poster-popup horizontal'>
					<img src={this.props.movie.Poster} className='no-border'/>
					<div className='vertical'>
						<h2>{movie.Title}</h2>
						<div className='horizontal button-container'>
							{movie.Ratings && <button type='button' className='button small-text yellow' value='button 1' disabled>IMDB Score: {movie.Ratings[0].Value}</button>}
							{movie.Ratings && <button type='button' className='button small-text green' value='button 2' disabled>Metacritic Score: {movie.Ratings[1].Value}</button>}
							<button type='button' className='button small-text red' value='button 3' id='delete-button'>Delete</button>
							<button type='button' className='button small-text red' value='button 3' id='close-button'>Close Popup</button>
						</div>
						<p>{movie.Plot}</p>
						<p className='subtitle'>{movie.Awards}</p>
						<p>Directed By: <strong>{movie.Director}</strong></p>
						<p>Add to List:</p> 
						<Select options={options} value='Add To List' onChange={this.addToListHandler} id={'add-to-list-button'} />
					</div>
				</div>
			</div>
		)

		return ReactDOM.createPortal(box, document.body)
	}

}
