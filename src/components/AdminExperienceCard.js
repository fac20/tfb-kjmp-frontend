import React from "react";
import Button from "../styled-components/Button";
import { TextContainer, DivContainer } from "../styled-components/Containers";
import Paragraph from "../styled-components/Paragraph";
import { RowResponsive } from "../styled-components/Responsive";
import { AdminApproveButton, AdminDeleteButton } from "./AdminButtons";

export default function ExperiencesAdminCard(props) {
	return (
		<>
			<DivContainer>
				<h1>{props.country_name}</h1>
				<TextContainer>
					<Paragraph width="40vw">Details: {props.details}</Paragraph>
				</TextContainer>
				<p>Socials: {props.socials}</p>
				<p>Tags: {props.tags && props.tags.join()}</p>
				<p>Overall experience rating: {props.overall_experience}</p>
				<RowResponsive>
					<AdminApproveButton
						id={props.id}
						table="experiences"
						setUpdated={props.setUpdated}
					/>
					<AdminDeleteButton
						id={props.id}
						table="experiences"
						setUpdated={props.setUpdated}
					/>
				</RowResponsive>
			</DivContainer>
		</>
	);
}
