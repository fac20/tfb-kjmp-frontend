import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ExperiencesAdminCard from "./experiences-admin-card";
import { Container } from "../styled-components/Containers";
import { RowResponsive } from "../styled-components/Responsive";

export default function ExperiencesAdmin() {
	const [experiencesPosts, setExperiencesPosts] = useState([]);
	const { table } = useParams();

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
	}, []); // why [table]?

	return (
		<>
			<Container justify="center" align="center">
				<RowResponsive>
					{experiencesPosts && table === "experiences" ? (
						experiencesPosts.map(
							({
								id,
								country_id,
								socials,
								details,
								tags,
								overall_experience,
								created_at,
							}) => (
								<ExperiencesAdminCard
									key={id}
									country_id={country_id}
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

// id SERIAL PRIMARY KEY,
// country_id INTEGER REFERENCES countries(id),
// socials TEXT,
// details TEXT,
// tags text[],
// overall_experience INTEGER,
// approved BOOL DEFAULT FALSE,
// created_at timestamp NOT NULL DEFAULT NOW()
