import React from "react";
import { useEffect, useState } from "react";
import Img from "./../components/img";
import geotag from "./../images/geotag.svg";
import {
	ColumnResponsive,
	RowResponsive,
} from "./../styled-components/Responsive";
import { Link, useParams } from "react-router-dom";

export default function Countries() {
	const [data, setData] = useState([]);
	let { name } = useParams();
	useEffect(() => {
		fetch("https://tfb-bqtg.herokuapp.com/countries")
			.then(result => result.json())
			.then(result => {
				console.log(result);
				const correctCountries = result.filter(
					country => country.continent === name,
				);
				console.log(correctCountries);
				setData(correctCountries);
			})
			.catch(error => error);
	}, []);

	// const params = useParams();
	// console.log(params);
	console.log(data[0]);

	return (
		<RowResponsive width=" 40vw">
			{data
				? data.map(data => (
						<div key={data.id}>
							<Link to={`/countries/${data.id}/laws`}>
								<ColumnResponsive>
									<Img src={geotag} alt="" width="10vw" />
									<h1>{data.country_name}</h1>
								</ColumnResponsive>
							</Link>
						</div>
				  ))
				: null}
		</RowResponsive>
	);
}
