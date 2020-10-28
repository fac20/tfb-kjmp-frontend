import React from "react";
import { useState, useEffect } from "react";
import { Container } from "./../styled-components/Containers";
import Button from "./../styled-components/Button";
import ExperiencesCard from "./../components/experiencecard";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";
import { useParams, useLocation, Link } from "react-router-dom";
import QuickExitButton from "./../components/exitButton";
import { filter } from "cypress/types/bluebird";

import { useAppContext } from "../App";

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
	}, [id, props]);

	const url = useLocation().pathname;

	const { searchString } = useAppContext();

	const filteredExperiences = !searchString
		? experiencesData
		: experiencesData.filter(experience => ({})); // filter using search string and experience.tags

	return (
		<>
			<NavBarTitle countryName={props.countryName} />
			<QuickExitButton />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center" align="flex-start">
					<Link to={`${url}/shareexperience`}>
						<Button width="15vw" left="-15vw" medialeft="0vw">
							Add Your own
						</Button>
					</Link>
					{experiencesData
						? filteredExperiences.map(({ id, foo, ...rest }) => (
								<ExperiencesCard key={id} width="5vw" {...rest} />
						  ))
						: null}
				</Container>
			</RowResponsive>
		</>
	);
}
