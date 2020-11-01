import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import NavList from "./../components/navList";
import SearcBar from "./../components/searchbar";
import { useAppContext } from "../App";

export function NavBarSide() {
	return (
		<>
			<NavContainer>
				<NavList />
			</NavContainer>
		</>
	);
}

{
	/* <>		<div classname="sticky">
				<section classname="navbar">
					<NavList />
				</section >
			</div>	
		</> */
}

const NavContainer = styled.div`
position: fixed;
top: 15vh;
left: 4rem;
/* border: solid black 1px; */
@media all and (max-width: 768px) {
	
		justify-content: center;
		width: 100%;
		height: 20vh;
		position: static;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;
	

`;

export function NavBarTitle() {
	const { countryName } = useAppContext();

	const location = useLocation();
	const path = location.pathname.split("/");
	const continentName = path[2];
	path.pop();
	if (
		path[path.length - 1] === "thingstodo" ||
		path[path.length - 1] === "experiences"
	)
		path.pop();
	let joinPath = path.join("/");

	const continentsObject = {
		africa: "Africa",
		asia: "Asia",
		caribbean: "Caribbean",
		europe: "Europe",
		centralamerica: "Central America",
		northamerica: "North America",
		southamerica: "South America",
		oceania: "Oceania",
	};

	return (
		<>
			<section className="navbartitle">
				<ColumnDiv>
					<Link to="/" className="title-link">
						<h1 className="title">THE BLACK QUEER TRAVEL GUIDE</h1>
					</Link>
					{continentName ? (
						<Link
							to={`/continents/${continentName}`}
							className="title-link"
							id="country-title">
							<h2 className="title">{continentsObject[continentName]}</h2>
						</Link>
					) : null}

					{countryName ? (
						<Link to={`${joinPath}/laws`} className="title-link">
							<h2 className="title">{countryName}</h2>
						</Link>
					) : null}
				</ColumnDiv>
				<SearcBar />
			</section>
		</>
	);
}

const ColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;
