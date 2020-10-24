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
					<ThingsToDoCard
						src="https://cdn.dribbble.com/users/2417352/screenshots/11825923/media/ca572e930d5ccba2f5741f9d99076904.jpg"
						title="Skate Park"
					/>
					<ThingsToDoCard
						src="https://cdn.dribbble.com/users/2008861/screenshots/12574987/media/992d50513ab3b8190982085068459edd.jpg"
						title="Vegan Bakery"
					/>
					<ThingsToDoCard
						src="https://cdn.dribbble.com/users/2417352/screenshots/11932034/media/5eb8ac97aac3a5abb2cb4f3a489634a4.jpg"
						title="Dog Park"
					/>
					<ThingsToDoCard
						src="https://cdn.dribbble.com/users/164119/screenshots/11797758/media/127e7cd394600cfc24694a8280d3ee0a.jpg"
						title="Brazil Pride"
					/>
				</Container>
			</RowResponsive>
		</>
	);
}
