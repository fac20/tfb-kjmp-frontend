import React, { useEffect, useState } from "react";

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

	return (
		<>
			<NavBarTitle countryName={props.countryName} />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center" align="flex-start" padTop="0">
					{lawData ? (
						<>
							{lawData.hasOwnProperty("Legislation") ? (
								<LawsCard title="Legislation" content={lawData.Legislation} />
							) : null}
							{lawData.hasOwnProperty("Population") ? (
								<LawsCard title="Population" content={lawData.Population} />
							) : null}
							{lawData.hasOwnProperty("Culture") ? (
								<LawsCard title="Culture" content={lawData.Culture} />
							) : null}
							{lawData.hasOwnProperty("Warnings") ? (
								<LawsCard title="Warnings" content={lawData.Warnings} />
							) : null}
						</>
					) : (
						<h1>No Information Yet.....</h1>
					)}
				</Container>
			</RowResponsive>
		</>
	);
}
