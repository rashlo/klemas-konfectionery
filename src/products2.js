import React from 'react';

export default function Products () {
	return (
		<>	
			<section id="products">
				
				<h1 className="prod-head">Products</h1>
       
				<table className="prod-table">
					<tr>
						<td>
						<div className="product">
							<span><b>Cakepops</b></span>
								<br />
								<br />
							<span>cakepops made in various types coated in white/coloured/dark/milk chocolate coating</span>
								<br />
								<br />
							<span>(White/Birthday/Devils Food/Strawberry)</span>
								<br />
								<br />
							<span>$16 / dozen</span>
						</div>
						</td>
						<td>
						<div className="product">
						  <span><b>Chocolate Covered Pretzels</b></span>
								<br />
								<br />
							<span>salted pretzels coated in white/coloured/dark/milk chocolate</span>
								<br />
								<br />
							<span>(Traditional/Sticks)</span>
								<br />
								<br />
							<span>$8 / 500 grams</span>
						</div>
						</td>
						<td>
						<div className="product">
							<span><b>Chocolate Strawberries</b></span>	
								<br />
								<br />
							<span>strawberries coated in white/coloured/dark/milk chocolate</span>
								<br />
								<br />
							<span>$14 / dozen</span>
						</div>
						</td>
					</tr>

					<tr>
						<td>
						<div className="product">
						  <span><b>Homestyle Rice Crispies</b></span>
								<br />
								<br />
							<span>Puffed rice and marshmellow combined with a hint of vanilla</span>
								<br />
								<br />
							<span>$10 / 500 grams</span>
						</div>
						</td>
						<td>
						<div className="product">
						  <span><b>Mix Set</b></span>
								<br />
								<br />
							<span>A dozen Cakepops and Chocolate Strawberries, 500g of Homestyle Rice Crispies, and  500g of Chocolate Covered Pretzels,</span>
								<br />
								<br />
							<span>$40</span>
						</div>
						</td>
					</tr>
				</table>

		{/*
				<table className="prod-table">
					<tr>
						<tr>
							<th>Cakepops</th>
							<th>Chocolate Covered Pretzels</th>
							<th>Chocolate Strawberries</th>
						</tr>
						<tr>
							<td>
								<span>cakepops made in various types coated in white/coloured/dark/milk chocolate coating</span>
							</td>
							<td>
								<span>salted pretzels coated in white/coloured/dark/milk chocolate</span>
							</td>
							<td>
								<span>strawberries coated in white/coloured/dark/milk chocolate</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>(White/Birthday/Devils Food/Strawberry)</span>
							</td>
							<td>
								<span>(Traditional/Sticks)</span>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>
								<span>$20/dozen</span>
							</td>
							<td>
								<span>$15/500 grams</span>
							</td>
							<td>
								<span>$18/dozen</span>
							</td>
						</tr>
					</tr>
				</table>
			*/}

		  </section>
		</>
	);	
}
