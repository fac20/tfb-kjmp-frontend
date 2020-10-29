import React from "react";

import Smile from "./ExperienceCardSmile";
import timeSinceCreate from "../utils/timeSinceCreation";
import Button from "../styled-components/Button";
import Paragraph from "./../styled-components/Paragraph";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import { RowResponsive } from "./../styled-components/Responsive";

export default function ExperiencesCard({
	socials,
	details,
	tags,
	overall_experience,
	created_at,
}) {
	const timeString = timeSinceCreate(created_at);

	function renderTags() {
		return tags.map(tag => (
			<Button background="hsl(46, 77%, 68%)">#{tag}</Button>
		));
	}

	return (
		<DivContainer>
			<Smile overallExperience={overall_experience} />
			<TextContainer>
				<Paragraph width="25vw">Details:{details}</Paragraph>
			</TextContainer>

			<p>{socials}</p>
			<p>Posted {timeString} ago</p>
			<RowResponsive>{renderTags()}</RowResponsive>
		</DivContainer>
	);
}
