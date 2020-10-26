import React from "react";
import { FormCont, Label, Input, TextArea } from "../styled-components/Form";
import { Container } from "../styled-components/Containers";

const ExperiencesForm = () => {
	const [socials, updateSocials] = React.useState("");
	const [details, updateDetails] = React.useState("");

	return (
		<Container>
			<FormCont>
				<Label>
					{" "}
					Instagram Handle@:
					<Input
						onChange={event => {
							updateSocials(event.target.value);
						}}
						value={socials}
						type="text"></Input>
				</Label>
				<Label>
					{" "}
					Your Experience:
					<TextArea
						onChange={event => {
							updateDetails(event.target.value);
						}}
						value={details}></TextArea>
				</Label>
				<Label>
					{" "}
					Instagram Handle@:
					<Input
						onChange={event => {
							updateSocials(event.target.value);
						}}
						value={socials}
						type="text"></Input>
				</Label>
				<Label>
					{" "}
					Instagram Handle@:
					<Input
						onChange={event => {
							updateSocials(event.target.value);
						}}
						value={socials}
						type="text"></Input>
				</Label>
			</FormCont>
		</Container>
	);
};

// experience.socials,
// experience.details,
// experience.tags,
// experience.overall_experience,

export default ExperiencesForm;
