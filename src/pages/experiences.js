import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import { Container, GridContainer } from "./../styled-components/Containers";
import Button from "./../styled-components/Button";
import ExperiencesCard from "./../components/experiencecard";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";
import DropdownFilter from "../components/ExperiencesDropwdownFilter";
import QuickExitButton from "./../components/exitButton";
import { useAppContext } from "../App";

export default function ExperienceContent() {
	const [experiencesData, setExperiencesData] = useState();
	const [filterBy, setFilterBy] = useState("none");
	const { id } = useParams();
	const { setCountryName } = useAppContext();

	useEffect(() => {
		fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/experiences`)
			.then(result => result.json())
			.then(result => {
				setExperiencesData(result);
				setCountryName(result[0].country_name);
			})
			.catch(error => error);
	}, []);

	const url = useLocation().pathname;
	// const url = "/";

	return (
		<>
			<NavBarTitle />
			<QuickExitButton />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center">
					<Link to={`${url}/shareexperience`}>
						<Button medialeft="0vw">Add Your own</Button>
					</Link>
					<DropdownFilter filterBy={filterBy} setFilterBy={setFilterBy} />
				</Container>
				<GridContainer>
					{experiencesData
						? experiencesData
								.filter(x => {
									if (filterBy === "none") return x;
									return x.tags.includes(filterBy);
								})
								.map(
									({
										socials,
										details,
										tags,
										overall_experience,
										created_at,
										id,
									}) => (
										<ExperiencesCard
											setFilterBy={setFilterBy}
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
				</GridContainer>
			</RowResponsive>
		</>
	);
}
