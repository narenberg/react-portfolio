import React, {Component} from 'react'
import {SRLWrapper} from 'simple-react-lightbox'

export default class MovieList extends Component {

	constructor(props) {
		super(props)
		this.state = {ids: ['tt6751668','tt1375666', 'tt0080684', 'tt0414387', 'tt0031381', 'tt0993846', 'tt0780536', 'tt6110648', 'tt5052448', 'tt1119646', 'tt3063516', 'tt2980516', 'tt0810819'], apikey: '8ca8817a', movies: [], ready: false}
	}

	async componentDidMount() {
		const {ids, apikey, movies} = this.state

		for(const i in ids) {
			console.log(ids[i])
			var url = 'https://omdbapi.com/?apikey=' + apikey + '&i=' + ids[i]
			var raw = await fetch(url)
			var json = await raw.json()
			movies.push(json)
		}

		this.setState(movies)
		this.setState({ready: true})
	}

	render() {
		const movies = this.state.movies
		const ready = this.state.ready
		return(
			<SRLWrapper>
				<div className='body-container center-images'>
					{!ready ? (<h1>Loading...</h1>) :
						(movies.map((movie) => (
							<img src={movie.Poster} alt={movie.Title + ' / Directed By: ' + movie.Director + ' / Rated: ' +  movie.imdbRating} className='movie-poster'/>
						)))}
				</div>
			</SRLWrapper>
			)
	}
}


