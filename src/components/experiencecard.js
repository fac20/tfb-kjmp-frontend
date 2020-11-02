import React from "react";
import styled from "styled-components";

import Smile from "./ExperienceCardSmile";
import timeSinceCreate from "../utils/timeSinceCreation";
import Button from "../styled-components/Button";
import Paragraph from "./../styled-components/Paragraph";
import {
	TextContainer,
	DivContainer,
	TagContainer,
} from "../styled-components/Containers";

export default function ExperiencesCard({
	socials,
	details,
	tags,
	overall_experience,
	created_at,
	setFilterBy,
}) {
	const timeString = timeSinceCreate(created_at);

	function renderTags() {
		return tags.map(tag => (
			<Button
				key={tag}
				background="hsl(46, 77%, 68%)"
				onClick={() => setFilterBy(tag)}>
				#{tag}
			</Button>
		));
	}

	return (
		<DivContainer fontSize="18px" width="350px" margin="1rem auto">
			<Smile overallExperience={overall_experience} />
			<TextContainer width="100%">
				<Paragraph fontSize="1rem">{socials}</Paragraph>
				<Paragraph width="80%">{details}</Paragraph>
				<Paragraph fontSize="0.9rem">Posted {timeString} ago</Paragraph>
			</TextContainer>

			<TagContainer>{renderTags()}</TagContainer>
		</DivContainer>
	);
}
