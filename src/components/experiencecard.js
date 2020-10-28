import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Image from "../styled-components/Img";
import Paragraph from "./../styled-components/Paragraph";
import {
	// ColumnResponsive,
	RowResponsive,
} from "./../styled-components/Responsive";

import smiley from "./../images/smileyface.svg";
import sad from "./../images/sadface.svg";
import straight from "./../images/straightface.svg";

export default function ExperiencesCard({
	socials,
	details,
	tags,
	overall_experience,
	created_at,
}) {
	const smileyIcon = { 1: sad, 2: sad, 3: straight, 4: smiley, 5: smiley };
	const dateNow = new Date().toISOString();

	const start = new Date(created_at).getTime();
	const end = new Date(dateNow).getTime();
	let seconds = Math.round(Math.abs(end - start) / 1000); // We'll round away millisecond differences.
	const days = Math.floor(seconds / 86400);
	seconds -= days * 86400;
	const hours = Math.floor(seconds / 3600);
	seconds -= hours * 3600;
	const minutes = Math.floor(seconds / 60);
	seconds -= minutes * 60;

	return (
		<DivContainer>
			<Image
				src={smileyIcon[overall_experience]}
				alt="random"
				className="whatever"
				width="3vw"
			/>
			<TextContainer>
				<Paragraph width="25vw">Details:{details}</Paragraph>
			</TextContainer>
			<p>Socials:{socials}</p>
			<p>
				Posted{" "}
				{(days && (days === 1 ? days + " day" : days + " days")) ||
					(hours && (hours === 1 ? hours + " hour" : hours + " hours")) ||
					(minutes &&
						(minutes === 1 ? minutes + " minute" : minutes + " minutes")) ||
					(seconds &&
						(seconds === 1 ? seconds + " second" : seconds + " seconds"))}{" "}
				ago
			</p>
			<RowResponsive>
				{tags
					? tags.map(tag => (
							<Button background="hsl(46, 77%, 68%)">#{tag}</Button>
					  ))
					: null}
			</RowResponsive>
		</DivContainer>
	);
}
