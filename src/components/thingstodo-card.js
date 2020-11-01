import React from "react";

import { TextContainer, DivContainer } from "../styled-components/Containers";
import Image from "../styled-components/Img";
import Paragraph from "./../styled-components/Paragraph";
import timeSinceCreate from "../utils/timeSinceCreation";

export default function ThingsToDoCard({
	src,
	created_at,
	name,
	details,
	date_time,
	location,
}) {
	const dateNow = new Date().toISOString();

	const timeString = timeSinceCreate(created_at);

	return (
		<>
			<DivContainer fontSize="18px" width="375px" margin="1rem auto">
				<Image src={src} alt="random" className="whatever" width="20vw" />
				<h1>{name}</h1>
				<TextContainer>
					<Paragraph>{details}</Paragraph>
					<Paragraph fontSize="0.9rem">
						Date of Event:
						{date_time}
					</Paragraph>
					<Paragraph fontSize="0.9rem">Location:{location}</Paragraph>
					<Paragraph fontSize="0.9rem">Posted {timeString} ago</Paragraph>
				</TextContainer>
				{/* <Button background="hsl(46, 77%, 68%)">hello</Button> */}
			</DivContainer>
		</>
	);
}
