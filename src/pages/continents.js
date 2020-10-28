import React from "react";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";
import { Link } from "react-router-dom";
import { NavBarTitle } from "./../components/navbar";
import QuickExitButton from "./../components/exitButton";
import { FlexCont, Container } from "./../styled-components/Containers";

import background from "./../images/form-back.svg";

const tadaAnimation = keyframes`${tada}`;
const TadaDiv = styled.div`
	animation: none;

	&:hover {
		animation: 1s ${tadaAnimation};
	}
`;

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
			<NavBarTitle />
			<QuickExitButton />
			<FlexCont
				width="50vw"
				height="70vh"
				back={background}
				overflow="scroll"
				media="75vw">
				{continentsArray.map(pair => {
					return (
						<>
							<TadaDiv>
								<FlexCont border="black solid 3px">
									<Link to={`/continents/${pair[0]}`} class="links">
										<h1>{pair[1]}</h1>
									</Link>
								</FlexCont>
							</TadaDiv>
						</>
					);
				})}
			</FlexCont>
		</>
	);
}
