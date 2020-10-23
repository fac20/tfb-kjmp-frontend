import React from "react";
import ThingsToDoCard from "./../components/thingstodo-card";
import { Container } from "./../styled-components/Containers";
import {
	RowResponsive,
	// ColumnResponsive,
} from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";

export default function ThingsToDo() {
	return (
		<>
			<NavBarTitle />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center">
					<ThingsToDoCard src="https://i.pinimg.com/564x/cd/91/fd/cd91fd565a1725fde927d0328ed3aafc.jpg" />
					<ThingsToDoCard src="https://i.pinimg.com/564x/8b/aa/b8/8baab88372ad27a36bffba492c131f39.jpg" />
					<ThingsToDoCard src="https://i.pinimg.com/564x/dc/e8/72/dce8724d9397650b002633f8ecdc082b.jpg" />
					<ThingsToDoCard src="https://i.pinimg.com/564x/20/13/bc/2013bc454ca00461b2e9ffabcada3ea3.jpg" />
				</Container>
			</RowResponsive>
		</>
	);
}
