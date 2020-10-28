import React from "react";
import NavList from "./../components/navList";
import { Link } from "react-router-dom";
import SearcBar from "./../components/searchbar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export function NavBarSide() {
	return (
		<>
			<div className="sticky">
				<section className="navbar">
					<NavList />
				</section>
			</div>
		</>
	);
}

export function NavBarTitle({ countryName }) {
	const location = useLocation();
	const path = location.pathname.split("/");
	const continentName = path[2];
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
