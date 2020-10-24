import React from "react";

import { Container } from "./../styled-components/Containers";
import LawsCard from "./../components/laws-card";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";

export default function Laws() {
	return (
		<>
			<NavBarTitle />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center">
					<LawsCard />
				</Container>
			</RowResponsive>
		</>
	);
}
