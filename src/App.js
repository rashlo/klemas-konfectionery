import React from 'react';
import './app.css';
import NavBar from './navigation.js';
import Home from './home.js';
import About from './about.js'
import Products2 from './products2.js';
import Contact from './contact.js';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow
} from '@react-google-maps/api'
/*
const mapStyles = {
	height: "400px",
	width: "400px",
}

const center = {
	lat: 43.653225,
	lng: -79.383186,
}*/

function App() {
	/*const {isLoaded, loadError} = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_MAP_API
	})

	if (loadError) return "Error loading Maps"
	if (!isLoaded) return "Loading Maps"*/

	return (
		<>
		  <div className="container">
				<NavBar />
				<Home />
		    <About />
				<Products2 />
				<Contact />
		  </div>
		</>
  );
}

export default App
