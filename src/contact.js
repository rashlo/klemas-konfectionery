import React from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow
} from '@react-google-maps/api';
import mapStyles from './mapstyles';

const mapContainerStyles = {
	margin: "20px",
	height: "400px",
	width: "400px",
}

const center = {
	lat: 43.7682249,
	lng: -79.5619494,
}

const options = {
	styles: mapStyles,
}

export default function Contact () {	
	const {isLoaded, loadError} = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_MAP_API
	})

	if (loadError) return "Error loading Maps"
	if (!isLoaded) return "Loading Maps"
	
	return (
		<>	
			<section id="contact">
				
				<h1 className="contact-head">Contact</h1>

				<span>Tel: 416-667-0052</span>
				<span>Email: KK@gmail.com</span>
				<span>4300 Steeles Ave W #18, Woodbridge, ON L4L 4C2</span>
			
				<GoogleMap 
					mapContainerStyle={mapContainerStyles} 
					zoom={14} 
					center={center}
					options={options}
				>	
					<Marker 
						position={center}
					/>
				</GoogleMap>
		  </section>
		</>
	);	
}


