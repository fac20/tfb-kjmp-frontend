import React, { useEffect, useState } from "react";
import ThingsToDoCard from "./../components/thingstodo-card";
import { Container } from "./../styled-components/Containers";
import {
	RowResponsive,
	// ColumnResponsive,
} from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";
import { useParams } from "react-router-dom";

export default function ThingsToDo() {
	const [thingsToDoData, setThingsToDoData] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/things_to_do`)
			.then(result => result.json())
			.then(result => setThingsToDoData(result))
			.catch(error => error);
	}, [id]);

	// const data = thingsToDoData.map(
	// 	({ name, details, date_time, location, created_at }) =>
	// 		<ThingsToDoCard
	// 			src="https://cdn.dribbble.com/users/2417352/screenshots/11825923/media/ca572e930d5ccba2f5741f9d99076904.jpg"
	// 			title={name}
	// 			details={details}
	// 			date_time={}ate_time}
	// 			oacation={location}
	// 		/>
	// );

	return (
		<>
			<NavBarTitle />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center"></Container>
			</RowResponsive>
		</>
	);
}

/* <ThingsToDoCard
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
					/> */
