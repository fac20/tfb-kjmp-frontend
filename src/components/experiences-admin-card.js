import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Paragraph from "../styled-components/Paragraph";
import { RowResponsive } from "../styled-components/Responsive";

export default function ExperiencesAdminCard(props) {
	return (
		<>
			<DivContainer>
				<h1>{props.country_id}</h1>
				<TextContainer>
					<Paragraph width="40vw">{props.details}</Paragraph>
				</TextContainer>
				<p>{props.socials}</p>
				<p>{props.tags}</p>
				<p>{props.overall_experience}</p>
				<RowResponsive>
					<Button background="#hsl(95, 71%, 73%)">Approve</Button>
					<Button background="hsl(4, 71%, 73%)">Delete</Button>
				</RowResponsive>
			</DivContainer>
		</>
	);
}
