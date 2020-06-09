import React, {Component} from 'react'
import firebase from '../firebase'
import * as d3 from 'd3'

export default class Graph extends Component {

	constructor(props){
		super(props)

		this.state = {movieId: '', circles: [], links: []}

		this.addMovie = this.addMovie.bind(this)
		this.onFormChange = this.onFormChange.bind(this)
		this.chart = this.chart.bind(this)
	}

	onFormChange(event){
		const name = event.target.name
		this.setState({movieId: event.target.value})
	}

	async componentDidMount(){
		const ref = await firebase.database().ref('GraphViz')
		await ref.once('value', (data) => {
			for(var child in data.val()){
				var obj = data.val()[child]
				var actors = obj.Actors.split(", ")
				var links = actors.map(a => {
					return {source: obj.Title, target: a}
				})
				actors = actors.filter(a => !this.state.circles.includes(a))
				this.setState(state => {
					return {circles: [...state.circles, {title: obj.Title, poster: obj.Poster}, ...actors]}
				})
				this.setState(state => {
					return {links: [...state.links, ...links]}
				})
				
				
			}
		})

		const elem = document.getElementById('svg-container')
		elem.appendChild(this.chart(this.state.circles, this.state.links))
	}

	async addMovie(event){
		event.preventDefault()
		this.setState({ready: false})
		const apikey = '8ca8817a'
		var url = 'https://omdbapi.com/?apikey=' + apikey + '&i=' + this.state.movieId
		var raw = await fetch(url)
		var json = await raw.json()
		
		const ref = await firebase.database().ref('GraphViz')
		if(!json.Error){
			ref.push(json)
		}
	}

	chart(nodes, links){
		const width = 1280, height = 720;

		const obj_nodes = nodes.map(node => {
			if(node.poster){
				return {id: node.title, poster: node.poster}
			}
			return {id: node}
		})
		const obj_links = links.map(link => {
			return {source: link.source, target: link.target};
		})

		const svg = d3.create("svg")
			.attr("viewBox", [0, 0, width, height])

		var defs = svg.append("svg:defs");
		obj_nodes.forEach((d, i) => {
			if(d.poster){
				console.log(d)
				defs.append("svg:pattern")
				    .attr("id", "poster" + d.id.replace(/\s/g, '').replace('\'', ''))
				    .attr("width", 1) 
				    .attr("height", 1)
				    .append("svg:image")
				    .attr("width", 100) 
				    .attr("height", 200)
				    .attr("xlink:href", d.poster)
				    .attr('preserveAspectRatio', 'xMidYMid slice');
				    
			}
		})

		const link = svg.append("g")
			.attr("stroke", "#999")
			.attr("stroke-opacity", 0.6)
			.selectAll('line')
			.data(obj_links)
			.join('line')
			.attr("stroke-width", 2)

		const node = svg.append("g")
			.attr("stroke", "#000")
			.attr("stroke-width", 1.5)
			.selectAll("circle")
			.data(obj_nodes)
			.join("circle")
			.attr("r", d =>{
				if(d.poster) return 40;
				else return 8;
			})
			.style("fill", function(d) {
				if(d.poster) return "url(#poster" + d.id.replace(/\s/g, '').replace('\'', '') + ")";
				else return d3.color("steelBlue")
			})
			.call(d3.drag()
		        .on("start", d => {
		        	if (!d3.event.active) simulation.alphaTarget(0.3).restart();
					d.fx = d.x;
					d.fy = d.y;
		        })
		        .on("drag", d => {
		        	d.fx = d3.event.x;
		        	d.fy = d3.event.y;
		        })
		        .on("end", d => {
		        	if(!d3.event.active) simulation.alphaTarget(0);
		        	d.fx = null;
		        	d.fy = null;
		        }));

		node.append("title")
			.text(d => d.id)

		var simulation = d3.forceSimulation()
		    .force("link", d3.forceLink().id(function(d) { return d.id; }))
		    .force("charge", d3.forceManyBody())
		    .force("center", d3.forceCenter(width / 2, height / 2))
		    .force("collosion", d3.forceCollide(30))
		
		simulation
			.nodes(obj_nodes)
			.on("tick", () =>{
				link
					.attr("x1", d => d.source.x)
					.attr("y1", d => d.source.y)
					.attr("x2", d => d.target.x)
					.attr("y2", d => d.target.y);

				node
					.attr("cx", d => d.x)
					.attr("cy", d => d.y)
			});

		simulation.force("link").links(obj_links)


		return svg.node()
	}

	render(){

		return(
			<div className='body-container'>
				<div id='svg-container'>
				</div>
			</div>
		)
	}
}