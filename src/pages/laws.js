import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Container } from "./../styled-components/Containers";
import LawsCard from "./../components/laws-card";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";

export default function Laws() {
	const [lawData, setLawData] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/laws`)
			.then(result => result.json())
			.then(result => setLawData(result))
			.catch(error => error);
	}, [id]);

	return (
		<>
			<NavBarTitle />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center" align="flex-start" padTop="0">
					<LawsCard />
				</Container>
			</RowResponsive>
		</>
	);
}
