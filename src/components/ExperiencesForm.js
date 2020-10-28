import React from "react";
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
import { useParams, useHistory } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Button from "../styled-components/Button";
import { ColumnResponsive } from "../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";
import QuickExitButton from "./../components/exitButton";

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
			{submitted ? (
				<SubmitContainer>
					<SubmitMessage>Thank you for your submission</SubmitMessage>
					<Button onClick={() => history.goBack()}>Back to Experiences</Button>
				</SubmitContainer>
			) : (
				<Container>
					<FormCont onSubmit={handleSubmit}>
						<Label htmlFor="socials">Instagram Handle@:</Label>
						<Input
							id="socials"
							onChange={event => {
								setSocials(event.target.value);
							}}
							value={socials}
							type="text"></Input>

						<Label htmlFor="details">Your Experience:</Label>
						<TextArea
							id="details"
							onChange={event => {
								setDetails(event.target.value);
							}}
							value={details}></TextArea>

						<Label htmlFor="rating">Overall Experience:</Label>
						<ReactStars
							id="rating"
							count={5}
							onChange={newRating => setRating(newRating)}
							size={72}
							activeColor="hsl(31, 95%, 84%)"
						/>

						<Label htmlFor="tags">Tag your post!</Label>

						<Fieldset id="tags">
							<CheckboxLabel htmlFor="black">Black</CheckboxLabel>
							<CheckboxInput
								id="black"
								name="black"
								onChange={handleCheckbox}
								checked={tags.name}
								type="checkbox"></CheckboxInput>

							<CheckboxLabel htmlFor="queer">Queer</CheckboxLabel>
							<CheckboxInput
								id="queer"
								name="queer"
								onChange={handleCheckbox}
								checked={tags.name}
								type="checkbox"></CheckboxInput>

							<CheckboxLabel htmlFor="trans">Trans</CheckboxLabel>
							<CheckboxInput
								id="trans"
								name="trans"
								onChange={handleCheckbox}
								checked={tags.name}
								type="checkbox"></CheckboxInput>

							<CheckboxLabel htmlFor="disabled">Disabled</CheckboxLabel>
							<CheckboxInput
								id="disabled"
								name="disabled"
								onChange={handleCheckbox}
								checked={tags.name}
								type="checkbox"></CheckboxInput>

							<CheckboxLabel htmlFor="neurotypical">Neurotypical</CheckboxLabel>
							<CheckboxInput
								id="neurotypical"
								name="neurotypical"
								onChange={handleCheckbox}
								checked={tags.name}
								type="checkbox"></CheckboxInput>

							<CheckboxLabel htmlFor="wheelchair-user">
								Wheelchair user
							</CheckboxLabel>
							<CheckboxInput
								id="wheelchair"
								name="wheelchair-user"
								onChange={handleCheckbox}
								checked={tags.name}
								type="checkbox"></CheckboxInput>

							<CheckboxLabel htmlFor="family-friendly">
								Family-friendly
							</CheckboxLabel>
							<CheckboxInput
								id="family"
								name="family-friendly"
								onChange={handleCheckbox}
								checked={tags.name}
								type="checkbox"></CheckboxInput>

							<CheckboxLabel htmlFor="business">
								Travelling for business
							</CheckboxLabel>
							<CheckboxInput
								id="business"
								name="business"
								onChange={handleCheckbox}
								checked={tags.name}
								type="checkbox"></CheckboxInput>
						</Fieldset>
						<Button>Submit</Button>
					</FormCont>
				</Container>
			)}
		</>
	);
};

export default ExperiencesForm;
