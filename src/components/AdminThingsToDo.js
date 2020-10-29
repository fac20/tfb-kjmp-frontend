import React, { useEffect, useState } from "react";

import ThingsToDoAdminCard from "./AdminThingsToDoCard";
import { Container } from "../styled-components/Containers";
import { RowResponsive } from "../styled-components/Responsive";

export default function ThingsToDoAdmin() {
	const [thingsToDoPosts, setThingsToDoPosts] = useState([]);
	const [updated, setUpdated] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:4000/admin/things_to_do`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("access-token")}`,
			},
		})
			.then(result => result.json())
			.then(result => {
				setThingsToDoPosts(result);
			})
			.catch(error => error);
	}, [updated]);

	return (
		<>
			<Container justify="center" align="center">
				<RowResponsive>
					<p>There are {thingsToDoPosts.length} posts to approve</p>
					<br></br>
					{thingsToDoPosts ? (
						thingsToDoPosts.map(
							({
								id,
								country_name,
								name,
								details,
								location,
								date_time,
								created_at,
							}) => (
								<ThingsToDoAdminCard
									setUpdated={setUpdated}
									key={id}
									id={id}
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
