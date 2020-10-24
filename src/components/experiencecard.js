import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Image from "../styled-components/Img";
import Paragraph from "./../styled-components/Paragraph";
import { RowResponsive } from "./../styled-components/Responsive";

export default function ExperiencesCard(props) {
	return (
		<>
			<DivContainer>
				<Image src={props.src} alt="random" className="whatever" width="3vw" />
				<TextContainer>
					<Paragraph width="25vw">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
					</Paragraph>
				</TextContainer>
				<RowResponsive>
					<Button background="hsl(46, 77%, 68%)">#black</Button>
					<Button background="hsl(46, 77%, 68%)">#queer</Button>
				</RowResponsive>
			</DivContainer>
		</>
	);
}
