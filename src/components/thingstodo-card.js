import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Image from "../styled-components/Img";
import Paragraph from "./../styled-components/Paragraph";

export default function ThingsToDoCard({
	src,
	created_at,
	name,
	details,
	date_time,
	location,
}) {
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
		<>
			<DivContainer>
				<Image src={src} alt="random" className="whatever" width="20vw" />
				<h1>{name}</h1>
				<TextContainer>
					<Paragraph>{details}</Paragraph>
				</TextContainer>
				<p>{date_time}</p>
				<p>{location}</p>
				<p>
					Posted{" "}
					{(days && (days === 1 ? days + " day" : days + " days")) ||
						(hours && (hours === 1 ? hours + " hour" : hours + " hours")) ||
						(minutes &&
							(minutes === 1 ? minutes + " minute" : minutes + " minutes")) ||
						(seconds &&
							(seconds === 1
								? seconds + " second"
								: seconds + " seconds"))}{" "}
					ago
				</p>
				{/* <Button background="hsl(46, 77%, 68%)">hello</Button> */}
			</DivContainer>
		</>
	);
}
