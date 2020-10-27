import React from "react";
import {
	FormCont,
	Label,
	Input,
	TextArea,
	CheckboxInput,
	CheckboxLabel,
	Fieldset,
} from "../styled-components/Form";
import { Container } from "../styled-components/Containers";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ExperiencesForm = () => {
	const [socials, setSocials] = React.useState("");
	const [details, setDetails] = React.useState("");
	const [rating, setRating] = React.useState("");
	const [tags, setTags] = React.useState({});

	const { id } = useParams();

	const handleCheckbox = event => {
		setTags({ ...tags, [event.target.name]: event.target.checked });
	};

	return (
		<Container>
			<FormCont
				onSubmit={event => {
					event.preventDefault();
					let tagsArray = Object.keys(tags).filter(tag => {
						if (tags[tag]) return tag;
					});
					console.log(tagsArray);
					fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/experiences`, {
						method: "POST",
						body: JSON.stringify({
							socials,
							details,
							rating,
							tags,
						}),
						headers: { "Content-Type": "application/json" },
					});
				}}>
				<Label>
					{" "}
					Instagram Handle@:
					<Input
						onChange={event => {
							setSocials(event.target.value);
						}}
						value={socials}
						type="text"></Input>
				</Label>
				<Label>
					{" "}
					Your Experience:
					<TextArea
						onChange={event => {
							setDetails(event.target.value);
						}}
						value={details}></TextArea>
				</Label>
				<Label> Overall Experience:</Label>
				<ReactStars
					count={5}
					onChange={newRating => setRating(newRating)}
					size={72}
					activeColor="#ffd700"
				/>
				<Label>Tag your post!</Label>
				<Fieldset>
					<CheckboxLabel>
						Black
						<CheckboxInput
							name="black"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Queer
						<CheckboxInput
							name="queer"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Trans
						<CheckboxInput
							name="trans"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Disabled
						<CheckboxInput
							name="disabled"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Neurotypical
						<CheckboxInput
							name="neurotypical"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Wheelchair user
						<CheckboxInput
							name="wheelchair"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Family-friendly
						<CheckboxInput
							name="familt"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Travelling for business
						<CheckboxInput
							name="business"
							onChange={handleCheckbox}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
				</Fieldset>
			</FormCont>
		</Container>
	);
};

export default ExperiencesForm;
