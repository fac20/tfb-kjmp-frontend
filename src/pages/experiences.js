import React, { useEffect, useState } from "react";

// import { useState } from "react";

import { Container } from "./../styled-components/Containers";
import Button from "./../styled-components/Button";
import ExperiencesCard from "./../components/experiencecard";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";
import { useParams, useLocation, Link } from "react-router-dom";

function ExperienceContent() {
	const [experiencesData, setExperiencesData] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/experiences`)
			.then(result => result.json())
			.then(result => setExperiencesData(result))
			.catch(error => error);
	}, [id]);

	const url = useLocation().pathname;

	return (
		<>
			<NavBarTitle />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center" align="flex-start">
					<Link to={`${url}/shareexperience`}>
						<Button>Add Your own</Button>
					</Link>
					{experiencesData
						? experiencesData.map(
								({
									socials,
									details,
									tags,
									overall_experience,
									created_at,
									id,
								}) => (
									<ExperiencesCard
										key={id}
										socials={socials}
										details={details}
										tags={tags}
										overall_experience={overall_experience}
										created_at={created_at}
										width="5vw"
									/>
								),
						  )
						: null}
				</Container>
			</RowResponsive>
		</>
	);
}

export default function Experiences(props) {
	const value = true;
	return <>{value ? <ExperienceContent /> : null}</>;
}
