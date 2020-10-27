import React from "react";
import { useEffect, useState } from "react";
import Img from "./../components/img";
import geotag from "./../images/geotag.svg";
import QuickExitButton from "./../components/exitButton";
import {
	ColumnResponsive,
	RowResponsive,
} from "./../styled-components/Responsive";
import { NavBarTitle } from "./../components/navbar";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { FlexCont, Container } from "./../styled-components/Containers";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";

const tadaAnimation = keyframes`${tada}`;

const TadaDiv = styled.div`
	animation: none;
	&:hover {
		animation: 1s ${tadaAnimation};
	}
`;

export default function Countries() {
	const [data, setData] = useState([]);
	let { name } = useParams();
	let { url, path } = useRouteMatch();

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

	return (
		<>
			<NavBarTitle title={name} />
			<QuickExitButton />
			<Container justify="center">
				<FlexCont
					width="45vw"
					height="75vh"
					className="countries"
					border="black solid 3px">
					<RowResponsive width=" 40vw">
						{data
							? data.map(data => (
									<div key={data.id}>
										<TadaDiv>
											<FlexCont border="black solid 3px">
												<Link to={`${url}/${data.id}/laws`} className="links">
													<ColumnResponsive>
														<h1>{data.country_name}</h1>
													</ColumnResponsive>
												</Link>
											</FlexCont>
										</TadaDiv>
									</div>
							  ))
							: null}
					</RowResponsive>
				</FlexCont>
			</Container>
		</>
	);
}
