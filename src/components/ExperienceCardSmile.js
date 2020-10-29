import React from "react";

import Image from "../styled-components/Img";
import smiley from "./../images/smileyface.svg";
import sad from "./../images/sadface.svg";
import straight from "./../images/straightface.svg";

export default function ExperienceCardSmile({ overallExperience }) {
	const smileyIcon = { 1: sad, 2: sad, 3: straight, 4: smiley, 5: smiley };

	return (
		<Image
			src={smileyIcon[overallExperience]}
			alt="random"
			className="whatever"
			width="3vw"
		/>
	);
}
