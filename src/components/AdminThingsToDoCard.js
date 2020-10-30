import React from "react";

import { TextContainer, DivContainer } from "../styled-components/Containers";
import Paragraph from "../styled-components/Paragraph";
import { RowResponsive } from "../styled-components/Responsive";
import { AdminApproveButton, AdminDeleteButton } from "./AdminButtons";

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
					<AdminApproveButton
						id={props.id}
						table="things_to_do"
						setUpdated={props.setUpdated}
					/>
					<AdminDeleteButton
						id={props.id}
						table="things_to_do"
						setUpdated={props.setUpdated}
					/>
				</RowResponsive>
			</DivContainer>
		</>
	);
}
