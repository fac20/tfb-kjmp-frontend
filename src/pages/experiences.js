import React from "react";
// import { useState } from "react";

import { Container } from "./../styled-components/Containers";
import ExperiencesCard from "./../components/experiencecard";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";

import smiley from "./../images/smileyface.svg";

import sad from "./../images/sadface.svg";

import straight from "./../images/straightface.svg";

function ExperienceContent() {
	return (
		<>
			<NavBarTitle />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center" align="flex-start">
					<ExperiencesCard src={sad} width="5vw" />
					<ExperiencesCard src={smiley} width="5vw" />
					<ExperiencesCard src={straight} width="5vw" />
					<ExperiencesCard src={smiley} width="5vw" />
				</Container>
			</RowResponsive>
		</>
	);
}

export default function Experiences(props) {
	const value = true;
	return <>{value ? <ExperienceContent /> : null}</>;
}
