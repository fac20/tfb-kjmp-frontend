import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Image from "../styled-components/Img";

export default function Card(props) {
	return (
		<>
			<DivContainer>
				<Image src={props.src} alt="random" className="whatever" width="30vw" />
				<TextContainer>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
					</p>
				</TextContainer>
				<Button background="hsl(46, 77%, 68%)">hello</Button>
			</DivContainer>
		</>
	);
}
