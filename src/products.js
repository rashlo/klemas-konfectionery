import React from 'react';

export default function Products () {
	return (
		<>	
			<section id="products">
				
				<h1 className="prod-head">Products</h1>

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
			
		  </section>
		</>
	);	
}
