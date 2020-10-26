import React from "react";
import { Container } from "./../styled-components/Containers";
import Img from "./../styled-components/Img";
import world from "./../images/world-map.svg";
import { Link } from "react-router-dom";
export default function Continents() {
	const continentsArray = [
		["africa", "Africa"],
		["asia", "Asia"],
		["caribbean", "Caribbean"],
		["europe", "Europe"],
		["centralamerica", "Central America"],
		["northamerica", "North America"],
		["southamerica", "South America"],
		["oceania", "Oceania"],
	];

	return (
		<>
			{continentsArray.map(pair => {
				return (
					<Link to={`/continents/${pair[0]}`}>
						<h1>{pair[1]}</h1>
					</Link>
				);
			})}
		</>
	);
}
