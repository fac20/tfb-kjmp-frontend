import React, { useEffect, useState } from "react";
import ExperiencesAdminCard from "./experiences-admin-card";
import { Container } from "../styled-components/Containers";
import { RowResponsive } from "../styled-components/Responsive";
import { useParams } from "react-router-dom";

export default function ExperiencesAdmin() {
	const [experiencesPosts, setExperiencesPosts] = useState([]);
	const { table } = useParams();
	console.log(table);

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/admin/experiences`)
			.then(result => result.json())
			.then(result => setExperiencesPosts(result))
			.catch(error => error);
	}, [table]); // why [table]?

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
