import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Image from "../styled-components/Img";
import Paragraph from "./../styled-components/Paragraph";

export default function ThingsToDoCard(props) {
	return (
		<>
			<DivContainer>
				<Image src={props.src} alt="random" className="whatever" width="20vw" />
				<h1>{props.name}</h1>
				<TextContainer>
					<Paragraph>{props.details}</Paragraph>
				</TextContainer>
				<p>{props.date_time}</p>
				<p>{props.location}</p>
				<p>Posted at: {props.created_at}</p>
				<Button background="hsl(46, 77%, 68%)">hello</Button>
			</DivContainer>
		</>
	);
}
