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
	}, [id, props]);

	const renderCards = () => {
		const types = ["Legislation", "Population", "Culture", "Warnings"];

		return types.map(type => {
			if (lawData.hasOwnProperty(type)) {
				return <LawsCard title={type} content={lawData[type]} />;
			}
		});
	};

	return (
		<>
			<NavBarTitle countryName={props.countryName} />
			<QuickExitButton />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center" align="flex-start" padTop="0">
					{lawData ? renderCards() : <h1>No Information Yet.....</h1>}
				</Container>
			</RowResponsive>
		</>
	);
}
