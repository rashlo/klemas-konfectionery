import React from 'react';
import cakepops from './img/cakepops1.jpg';
import pretz from './img/pretz1.jpg';
import chStrbry from './img/choco-strawberries1.jpg';

export default function Home () {
	return (
		<>	
		<section id="home">
		
		<h1 className="header">Klema's Konfectionary</h1> 
 		
		<div className="image-revolver">
			<img className="main-img" src={cakepops} alt="cakepops" width="auto" height="400"/> 
			<img className="home-img" src={pretz} alt="pretz" width="auto" height="400"/>
			<img className="home-img" src={chStrbry} alt="ch-strbry" width="auto" height="400"/>
		</div>
		
		</section>
		</>
	);	
}

