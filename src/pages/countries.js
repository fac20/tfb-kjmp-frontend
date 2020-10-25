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

	useEffect(() => {
		fetch("https://tfb-bqtg.herokuapp.com/countries")
			.then(result => result.json())
			.then(result => setData(result))
			.catch(error => error);
	}, []);

	// const params = useParams();
	// console.log(params);
	console.log(data[0]);

	return (
		<RowResponsive width=" 40vw">
			<ul>
				<li>hello</li>
				{/* {data
					? data.map(data => (
							<>
								<Link to="/countries/{data.id}">
									<ColumnResponsive>
										<Img src={geotag} alt="" width="10vw" />
										<h1 key={data.id}>{data.country_name}</h1>
									</ColumnResponsive>
								</Link>
							</>
					  ))
					: null} */}
			</ul>
		</RowResponsive>
	);
}
