import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Paragraph from "../styled-components/Paragraph";
import { RowResponsive } from "../styled-components/Responsive";

export default function ThingsToDoAdminCard(props) {
	return (
		<>
			<DivContainer>
				<h1>Country: {props.country_name}</h1>
				<h1>Name: {props.name}</h1>
				<TextContainer>
					<Paragraph width="40vw">Details: {props.details}</Paragraph>
				</TextContainer>
				<p>Location: {props.location}</p>
				<p>Things to do date/time: {props.date_time}</p>
				<p>Post created at: {props.created_at} </p>
				<RowResponsive>
					<Button background="#hsl(95, 71%, 73%)">Approve</Button>
					<Button background="hsl(4, 71%, 73%)">Delete</Button>
				</RowResponsive>
			</DivContainer>
		</>
	);
}
