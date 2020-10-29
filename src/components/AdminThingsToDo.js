import React, { useEffect, useState } from "react";

import ThingsToDoAdminCard from "./AdminThingsToDoCard";
import { Container } from "../styled-components/Containers";
import { RowResponsive } from "../styled-components/Responsive";

export default function ThingsToDoAdmin() {
	const [thingsToDoPosts, setThingsToDoPosts] = useState([]);

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/admin/things_to_do`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("access-token")}`,
			},
		})
			.then(result => result.json())
			.then(result => {
				setThingsToDoPosts(result);
				console.log(result);
			})
			.catch(error => error);
	}, []);

	return (
		<>
			<Container justify="center" align="center">
				<RowResponsive>
					{thingsToDoPosts ? (
						thingsToDoPosts.map(
							({
								country_name,
								name,
								details,
								location,
								date_time,
								created_at,
							}) => (
								<ThingsToDoAdminCard
									// key={id}
									country_name={country_name}
									name={name}
									details={details}
									location={location}
									date_time={date_time}
									created_at={created_at}
								/>
							),
						)
					) : (
						<h1>Fetching things to do posts for approval...</h1>
					)}
				</RowResponsive>
			</Container>
		</>
	);
}
