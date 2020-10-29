import React, { useEffect, useState } from "react";

import ExperiencesAdminCard from "./AdminExperienceCard";
import { Container } from "../styled-components/Containers";
import { RowResponsive } from "../styled-components/Responsive";

export default function ExperiencesAdmin() {
	const [experiencesPosts, setExperiencesPosts] = useState([]);

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/admin/experiences`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("access-token")}`,
			},
		})
			.then(result => result.json())
			.then(result => {
				setExperiencesPosts(result);
				console.log(result);
			})
			.catch(error => error);
	}, []);

	return (
		<>
			<Container justify="center" align="center">
				<p>There are {experiencesPosts.length} posts to approve</p>
				<RowResponsive>
					{experiencesPosts ? (
						experiencesPosts.map(
							({
								id,
								country_name,
								socials,
								details,
								tags,
								overall_experience,
								created_at,
							}) => (
								<ExperiencesAdminCard
									key={id}
									country_name={country_name}
									socials={socials}
									details={details}
									tags={tags}
									overall_experience={overall_experience}
									created_at={created_at}
								/>
							),
						)
					) : (
						<h1>Fetching experiences posts for approval...</h1>
					)}
				</RowResponsive>
			</Container>
		</>
	);
}
