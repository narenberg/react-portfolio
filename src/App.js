import React from 'react';
import './App.css';
import NavBar from './components/navbar.js'
import SimpleReactLightbox from 'simple-react-lightbox'

function App() {
  return (
    <div className="App">
	    <SimpleReactLightbox>
	      <NavBar />
      	</SimpleReactLightbox>
      	<div id='modal-root'></div>
    </div>
  );
}

export default App;
