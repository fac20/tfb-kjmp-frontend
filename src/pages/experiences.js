import React from "react";
import { useState, useEffect } from "react";
import { Container } from "./../styled-components/Containers";
import Button from "./../styled-components/Button";
import ExperiencesCard from "./../components/experiencecard";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";
import { useParams, useLocation, Link } from "react-router-dom";
import QuickExitButton from "./../components/exitButton";

export default function ExperienceContent(props) {
	const [experiencesData, setExperiencesData] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/experiences`)
			.then(result => result.json())
			.then(result => {
				setExperiencesData(result);
				props.setCountryName(result[0].country_name);
			})
			.catch(error => error);
	}, [id]);

	const url = useLocation().pathname;

	return (
		<>
			<NavBarTitle countryName={props.countryName} />
			<QuickExitButton />
			<RowResponsive>
				<NavBarSide countryName={props.countryName} />
				<Container justify="center" align="flex-start">
					<Link to={`${url}/shareexperience`}>
						<Button width="15vw" left="-15vw" medialeft="0vw">
							Add Your own
						</Button>
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
