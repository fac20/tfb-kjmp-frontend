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
} from "../styled-components/Form";
import { Container } from "../styled-components/Containers";
import Button from "../styled-components/Button";
// import { ColumnResponsive } from "../styled-components/Responsive";
import { NavBarTitle } from "./navbar";
import QuickExitButton from "./exitButton";


const ExperiencesForm = props => {
	const [socials, setSocials] = React.useState("");
	const [details, setDetails] = React.useState("");
	const [rating, setRating] = React.useState("");
	const [tags, setTags] = React.useState({});
	const [submitted, setSubmitted] = React.useState(false);
	const { id } = useParams();
	const history = useHistory();

	const handleCheckbox = event => {
		setTags({ ...tags, [event.target.name]: event.target.checked });
	};

	const handleSubmit = event => {
		event.preventDefault();
		let tagsArray = Object.keys(tags).filter(tag => {
			if (tags[tag]) return tag;
		});
		fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/experiences`, {
			method: "POST",
			body: JSON.stringify({
				socials,
				details,
				overall_experience: rating,
				tags: tagsArray,
			}),
			headers: { "Content-Type": "application/json" },
		}).then(data => setSubmitted(true));
	};

	return (
		<>
			<NavBarTitle countryName={props.countryName} />
			<QuickExitButton />
			{submitted && renderSubmitted()}
			{!submitted && renderForm()}
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
		return (
			<Container justify="center" align="center" width="100vw">
				<FormCont onSubmit={handleSubmit}>
					<Label htmlFor="socials" color="hsl(31, 95%, 84%)">
						Instagram Handle @:
					</Label>
					<Input
						name="socials"
						onChange={event => {
							setSocials(event.target.value);
						}}
						value={socials}
						type="text"
					/>
					<Label htmlFor="details" color="hsl(31, 95%, 84%)">
						Your Experience:
					</Label>
					<TextArea
						name="details"
						onChange={event => {
							setDetails(event.target.value);
						}}
						value={details}
					/>
					<Label htmlFor="rating" color="hsl(31, 95%, 84%)">
						Overall Experience:
					</Label>
					<ReactStars
						id="rating"
						count={5}
						onChange={newRating => setRating(newRating)}
						size={72}
						activeColor="hsl(31, 95%, 84%)"
						color="hsl(35, 67%, 96%)"
					/>
					<Label htmlFor="tags" color="hsl(31, 95%, 84%)">
						Tag your post!
					</Label>
					<Fieldset id="tags">
						<CheckboxLabel htmlFor="black">Black</CheckboxLabel>
						<CheckboxInput
							id="black"
							name="black"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"
						/>
						<CheckboxLabel htmlFor="queer">Queer</CheckboxLabel>
						<CheckboxInput
							id="queer"
							name="queer"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"
						/>
						<CheckboxLabel htmlFor="trans">Trans</CheckboxLabel>
						<CheckboxInput
							id="trans"
							name="trans"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"
						/>
						<CheckboxLabel htmlFor="disabled">Disabled</CheckboxLabel>
						<CheckboxInput
							id="disabled"
							name="disabled"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"
						/>
						<CheckboxLabel htmlFor="neurotypical">Neurotypical</CheckboxLabel>
						<CheckboxInput
							id="neurotypical"
							name="neurotypical"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"
						/>
						<CheckboxLabel htmlFor="wheelchair-user">
							Wheelchair user
						</CheckboxLabel>
						<CheckboxInput
							id="wheelchair"
							name="wheelchair-user"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"
						/>
						<CheckboxLabel htmlFor="family-friendly">
							Family-friendly
						</CheckboxLabel>
						<CheckboxInput
							id="family"
							name="family-friendly"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"
						/>
						<CheckboxLabel htmlFor="business">
							Travelling for business
						</CheckboxLabel>
						<CheckboxInput
							id="business"
							name="business"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"
						/>
					</Fieldset>
					<Button fontsize="1.5vw" height="7vh" width="7vw">
						Submit
					</Button>
				</FormCont>
			</Container>
		);
	}
};

export default ExperiencesForm;
