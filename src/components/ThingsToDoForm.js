import React from "react";
import {
	FormCont,
	Label,
	Input,
	TextArea,
	SubmitMessage,
	SubmitContainer,
} from "../styled-components/Form";
import { Container } from "../styled-components/Containers";
import { useParams, useHistory } from "react-router-dom";
import Button from "../styled-components/Button";
import QuickExitButton from "./exitButton";
import { NavBarTitle } from "./navbar";

export default function ThingsToDoForm() {
	const [submitted, setSubmitted] = React.useState(false);
	const [name, setName] = React.useState("");
	const [details, setDetails] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [date_time, setDateTime] = React.useState("");

	const { id } = useParams();
	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault();
		fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/things_to_do`, {
			method: "POST",
			body: JSON.stringify({
				name,
				details,
				date_time,
				location,
			}),
			headers: { "Content-Type": "application/json" },
		}).then(data => setSubmitted(true));
	};
	return (
		<>
			<NavBarTitle />
			<QuickExitButton />
			{submitted ? (
				<SubmitContainer>
					<SubmitMessage>Thank you for your submission</SubmitMessage>
					<Button onClick={() => history.goBack()}>Back to Things to Do</Button>
				</SubmitContainer>
			) : (
				<Container justify="center" align="center">
					<FormCont onSubmit={handleSubmit}>
						<Label htmlFor="name" color="hsl(31, 95%, 84%)">
							Name:
						</Label>
						<Input
							name="name"
							type="text"
							value={name}
							onChange={event => {
								setName(event.target.value);
							}}></Input>
						<Label htmlFor="details" color="hsl(31, 95%, 84%)">
							Details:
						</Label>

						<TextArea
							name="details"
							value={details}
							type="textarea"
							placeholder="Tell us about it!"
							onChange={event => {
								setDetails(event.target.value);
							}}
						/>
						<Label htmlFor="date" color="hsl(31, 95%, 84%)">
							Date Of Event:
						</Label>
						<Input
							type="date"
							name="date"
							id="date"
							value={date_time}
							onChange={event => setDateTime(event.target.value)}
						/>
						<Label htmlFor="location" color="hsl(31, 95%, 84%)">
							Location:
						</Label>
						<Input
							type="text"
							name="location"
							value={location}
							onChange={event => {
								setLocation(event.target.value);
							}}
						/>
						<Button>SUBMIT</Button>
					</FormCont>
				</Container>
			)}
		</>
	);
}
