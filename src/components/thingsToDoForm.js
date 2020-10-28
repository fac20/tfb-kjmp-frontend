import React from "react";
import {
	FormCont,
	Label,
	Input,
	TextArea,
	// CheckboxInput,
	// CheckboxLabel,
	// Fieldset,
	// SubmitMessage,
	// SubmitContainer,
} from "../styled-components/Form";
import { Container } from "../styled-components/Containers";
// import { useParams, useHistory } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import Button from "../styled-components/Button";
import QuickExitButton from "./../components/exitButton";
import { NavBarTitle } from "./navbar";

export default function ThingsToDoForm() {
	return (
		<>
			<NavBarTitle />
			<QuickExitButton />
			<Container justify="center" align="center">
				<FormCont>
					<Label htmlFor="name" color="hsl(31, 95%, 84%)">
						Name:
					</Label>
					<Input name="name" type="text"></Input>
					<Label htmlFor="details" color="hsl(31, 95%, 84%)">
						Details:
					</Label>

					<TextArea
						name="details"
						type="textarea"
						placeholder="Tell us about it!"
					/>

					<Input></Input>
					<Label htmlFor="location">Location:</Label>
					<Input type="text" name="location"></Input>
					<Button fontsize="1.5vw" height="7vh" width="7vw">
						Submit
					</Button>
				</FormCont>
			</Container>
		</>
	);
}

// CREATE TABLE things_to_do

// (   id SERIAL PRIMARY KEY,
//     country_id INTEGER REFERENCES countries(id),
//     name VARCHAR(255) NOT NULL,
//     details TEXT,
//     date_time TEXT,
//     location TEXT,
//     approved BOOL DEFAULT FALSE,
//     created_at timestamp NOT NULL DEFAULT NOW()
// );
