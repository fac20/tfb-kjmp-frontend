import React from "react";
import { useEffect, useState } from "react";
import Img from "./../components/img";
import geotag from "./../images/geotag.svg";
import {
	ColumnResponsive,
	RowResponsive,
} from "./../styled-components/Responsive";

export default function Countries() {
	const [data, setData] = useState([]);
	// const [key,setKey] = useState(null)

	useEffect(() => {
		fetch("https://tfb-bqtg.herokuapp.com/countries")
			.then(result => result.json())
			.then(result => setData(result))
			.catch(error => error);
	}, []);
	return (
		<RowResponsive width="40vw">
			{data
				? data.map(({ id, country_name }) => (
						<>
							<ColumnResponsive key={id}>
								<Img src={geotag} alt="" />
								<h1>{country_name}</h1>
							</ColumnResponsive>
						</>
				  ))
				: null}
		</RowResponsive>
	);
}
