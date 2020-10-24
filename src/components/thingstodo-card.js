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
				<h1>{props.title}</h1>
				<TextContainer>
					<Paragraph>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
					</Paragraph>
				</TextContainer>
				<h2>#BLACK #QUEER</h2>
				<Button background="hsl(46, 77%, 68%)">hello</Button>
			</DivContainer>
		</>
	);
}
