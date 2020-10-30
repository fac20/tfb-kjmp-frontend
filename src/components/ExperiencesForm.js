import React from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import {
	FormCont,
	Label,
	Input,
	TextArea,
	CheckboxInput,
	CheckboxLabel,
	Fieldset,
	SubmitMessage,
	SubmitContainer,
	Span,
} from "../styled-components/Form";
import { Container } from "../styled-components/Containers";
import Button from "../styled-components/Button";
import { NavBarTitle } from "./navbar";
import QuickExitButton from "./exitButton";
import tagsArray from "../utils/tags";

const ExperiencesForm = props => {
	const [socials, setSocials] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [details, setDetails] = React.useState("");
	const [rating, setRating] = React.useState("");
	const [tags, setTags] = React.useState({});
	const [submitted, setSubmitted] = React.useState(false);
	const [valid, setValid] = React.useState(false);
	const { id } = useParams();
	const history = useHistory();

	const handleCheckbox = event => {
		setTags({ ...tags, [event.target.name]: event.target.checked });
	};

	const handleSubmit = event => {
		event.preventDefault();
		setSubmitted(true);
		let tagsArray = Object.keys(tags).filter(tag => {
			if (tags[tag]) return tag;
		});
		if (location && details && rating) {
			fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/experiences`, {
				method: "POST",
				body: JSON.stringify({
					socials,
					details,
					overall_experience: rating,
					tags: tagsArray,
				}),
				headers: { "Content-Type": "application/json" },
			}).then(() => setValid(true));
		}
	};

	return (
		<>
			<NavBarTitle />
			<QuickExitButton />
			{valid && renderSubmitted()}
			{!valid && renderForm()}
		</>
	);

	function renderSubmitted() {
		return (
			<SubmitContainer>
				<SubmitMessage>Thank you for your submission</SubmitMessage>
				<Button onClick={() => history.goBack()}>Back to Experiences</Button>
			</SubmitContainer>
		);
	}

	function renderForm() {
		const renderCheckboxes = () => {
			const checkboxTags = tagsArray.slice(1);

			return checkboxTags.map(tag => (
				<React.Fragment key={tag}>
					<CheckboxLabel htmlFor={tag}>
						{tag[0].toUpperCase() + tag.slice(1)}
					</CheckboxLabel>
					<CheckboxInput
						id={tag}
						name={tag}
						onChange={handleCheckbox}
						checked={tags.name}
						type="checkbox"
					/>
				</React.Fragment>
			));
		};

		return (
			<Container justify="center" align="center" width="100vw">
				<FormCont onSubmit={handleSubmit}>
					<Label htmlFor="socials" color="hsl(31, 95%, 84%)">
						Instagram Handle:
					</Label>
					<Input
						name="socials"
						onChange={event => {
							setSocials(event.target.value);
						}}
						value={socials}
						type="text"
						placeholder="@theblackqueertravelguide"
					/>
					<Label htmlFor="location" color="hsl(31, 95%, 84%)">
						Location: <Span>*</Span>
					</Label>
					<Input
						name="location"
						id="location"
						onChange={event => {
							setLocation(event.target.value);
						}}
						value={location}
						type="text"
						placeholder="@theblackqueertravelguide"
					/>
					{submitted && !location ? (
						<Span>Please enter a location!</Span>
					) : null}
					<Label htmlFor="details" color="hsl(31, 95%, 84%)">
						Your Experience: <Span>*</Span>
					</Label>
					<TextArea
						name="details"
						onChange={event => {
							setDetails(event.target.value);
						}}
						value={details}
					/>
					{submitted && !details ? (
						<Span>Please enter some details about your experience!</Span>
					) : null}
					<Label htmlFor="rating" color="hsl(31, 95%, 84%)">
						Overall Rating: <Span>*</Span>
					</Label>
					<ReactStars
						id="rating"
						count={5}
						onChange={newRating => setRating(newRating)}
						size={72}
						activeColor="hsl(31, 95%, 84%)"
						color="hsl(35, 67%, 96%)"
					/>
					{submitted && !rating ? <Span>Please enter a rating!</Span> : null}
					<Label htmlFor="tags" color="hsl(31, 95%, 84%)">
						Tag your post!
					</Label>
					<Fieldset id="tags">{renderCheckboxes()}</Fieldset>
					<Button fontsize="1.5vw" height="7vh" width="7vw">
						Submit
					</Button>
				</FormCont>
			</Container>
		);
	}
};

export default ExperiencesForm;
