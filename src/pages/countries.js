import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";

import QuickExitButton from "./../components/exitButton";
import {
	ColumnResponsive,
	RowResponsive,
} from "./../styled-components/Responsive";
import { NavBarTitle } from "./../components/navbar";
import { FlexCont, Container } from "./../styled-components/Containers";

const tadaAnimation = keyframes`${tada}`;

const TadaDiv = styled.div`
	animation: none;
	&:hover {
		animation: 1s ${tadaAnimation};
	}
	cursor: pointer;
`;

export default function Countries() {
	const [data, setData] = useState([]);
	let { name } = useParams();
	let { url } = useRouteMatch();

	useEffect(() => {
		fetch("https://tfb-bqtg.herokuapp.com/countries")
			.then(result => result.json())
			.then(result => {
				const correctCountries = result.filter(
					country => country.continent === name,
				);
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
					border="black solid 3px"
					overflow="scroll"
					media="75vw">
					<RowResponsive width=" 40vw">
						{data === [] ? <h1>LOADING...</h1> : null}
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
