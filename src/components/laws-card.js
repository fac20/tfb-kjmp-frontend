import React from "react";
import Button from "styled-components/Button";
import {
	TextContainer,
	DivContainer,
	Container,
} from "styled-components/Containers";
import Paragraph from "styled-components/Paragraph";

export default function LawsCard({ title, content }) {
	return (
		<Container justify="center" align="flex-start" padTop="0">
			<DivContainer>
				<h1>{title}</h1>
				<TextContainer>
					<Paragraph>{content}</Paragraph>
				</TextContainer>
				{/* <Button background="hsl(46, 77%, 68%)">V</Button> */}
			</DivContainer>
		</Container>
	);
}
