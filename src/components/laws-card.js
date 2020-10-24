import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Paragraph from "./../styled-components/Paragraph";

export default function LawsCard(props) {
	return (
		<>
			<DivContainer>
				<h1>LAWS</h1>
				<TextContainer>
					<Paragraph>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
					</Paragraph>
				</TextContainer>
				<Button background="hsl(46, 77%, 68%)">V</Button>
			</DivContainer>
		</>
	);
}
