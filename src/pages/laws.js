import React, { useEffect, useState } from "react";
import QuickExitButton from "./../components/exitButton";
import { useParams } from "react-router-dom";
import { Container } from "./../styled-components/Containers";
import LawsCard from "./../components/laws-card";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";

export default function Laws(props) {
	const [lawData, setLawData] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/laws`)
			.then(result => result.json())
			.then(result => {
				setLawData(result);
				props.setCountryName(result.Country);
			})

			.catch(error => error);
	}, [id]);

	function renderLawCards() {
		if (!lawData) return <h1>No Information Yet.....</h1>;
		return Object.keys(lawData).map(key => {
			if (key === "id" || key === "Country") return null;
			return <LawsCard title={key} content={lawData[key]} />;
		});
	}

	return (
		<>
			<NavBarTitle countryName={props.countryName} />
			<QuickExitButton />
			<RowResponsive>
				<NavBarSide countryName={props.countryName} />
				<Container justify="center" align="flex-start" padTop="0">
					{renderLawCards()}
				</Container>
			</RowResponsive>
		</>
	);
}
